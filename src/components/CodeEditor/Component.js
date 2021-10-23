import React, { useEffect, useMemo, useRef } from "react";
import ReactAce from "react-ace-editor";

export default function CodeEditor({ themeMode, onChangeEditor, ...props }) {
  const editorRef = useRef(null);

  const theme = useMemo(
    () => (themeMode === "dark" ? "dracula" : "eclipse"),
    [themeMode]
  );

  useEffect(() => {
    const editor = editorRef.current.editor;

    require(`brace/theme/${theme}`);
    editor.setTheme(`ace/theme/${theme}`);
  }, [theme]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editor.setShowPrintMargin(false); // Removes annoying vertical bar
    }
  }, []);

  return (
    <ReactAce
      mode="markdown"
      theme={theme}
      setReadOnly={false}
      onChange={onChangeEditor}
      ref={editorRef}
      {...props}
    />
  );
}
