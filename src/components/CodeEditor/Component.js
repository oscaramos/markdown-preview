import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';

export default class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue) {
    this.props.onChangeEditor(newValue)
  }
  getTheme(themeMode) {
    return themeMode === 'dark' ? 'dracula' : 'eclipse'
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // On change theme mode, update editor
    if(this.props.themeMode !== prevProps.themeMode) {
      const editor = this.ace.editor;
      const themeMode = this.props.themeMode;

      const theme = this.getTheme(themeMode)
      require(`brace/theme/${theme}`);
      editor.setTheme(`ace/theme/${theme}`)
    }
  }
  render() {
    const themeMode = this.props.themeMode;
    return (
      <ReactAce
        mode="markdown"
        theme={this.getTheme(themeMode)}
        setReadOnly={false}
        onChange={this.onChange}
        // Let's put things into scope
        ref={instance => {
          this.ace = instance;
          if(instance) { // On updates this is null
            const editor = this.ace.editor;
            editor.setShowPrintMargin(false); // Removes annoying vertical bar
          }
        }}
        {...this.props}
      />
    );
  }
}
