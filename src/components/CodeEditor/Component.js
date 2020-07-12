import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';

export default class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      onChangeToParent: props.onChange
    }
  }
  onChange(newValue) {
    this.state.onChangeToParent(newValue)
  }
  render() {
    console.log(this.props.className);
    return (
      <ReactAce
        mode="markdown"
        theme="textmate"
        setReadOnly={false}
        onChange={this.onChange}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
        {...this.props}
      />
    );
  }
}
