import React, { useMemo, useRef } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-eclipse";

const codeEditorStyle = {
  width: "100%",
  height: "90vh",
  padding: 0,
};

export default function CodeEditor({ themeMode, onChangeEditor, ...props }) {
  const editorRef = useRef(null);

  const theme = useMemo(
    () => (themeMode === "dark" ? "dracula" : "eclipse"),
    [themeMode]
  );

  return (
    <AceEditor
      mode="markdown"
      theme={theme}
      setReadOnly={false}
      onChange={onChangeEditor}
      ref={editorRef}
      showPrintMargin={false}
      style={codeEditorStyle}
      {...props}
    />
  );
}
