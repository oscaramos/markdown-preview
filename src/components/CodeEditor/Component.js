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
  render() {
    return (
      <ReactAce
        mode="markdown"
        theme="eclipse"
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
