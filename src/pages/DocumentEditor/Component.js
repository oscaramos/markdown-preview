import React from "react";
import Markdown from "react-markdown";
import { useHistory } from "react-router-dom";

import Grid from "@mui/material/Grid";

import CodeEditor from "components/CodeEditor";
import Layout from "components/Layout";
import Meta from "components/Meta";

import { useStore } from "../../store";
import useStyles from "./styles";

function DocumentEditor({ match }) {
  const { state, actions } = useStore();

  const classes = useStyles();

  const documentId = match.params.docId;
  const document = state.documents.find(
    (document) => document.id === documentId
  );

  const history = useHistory();

  const onChangeEditor = (newValue) => {
    actions.documents.setMarkdownText({
      documentId,
      newDocumentText: newValue,
    });
  };

  const themeMode = state.theme.mode;

  if (!document) {
    history.push("/not-found");
    return null;
  }

  return (
    <>
      <Meta title="Document editor" description="Document editor" />
      <Layout>
        <Grid
          item
          container
          direction="row"
          className={classes.codeEditorAndResultContainer}
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            <CodeEditor
              key={documentId}
              onChangeEditor={onChangeEditor}
              defaultValue={document.markdownText}
              themeMode={themeMode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              className={classes.convertedContainer}
              style={{
                backgroundColor: themeMode === "dark" ? "#44475A" : "#ffffff",
              }}
            >
              <Markdown source={document.markdownText} />
            </div>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default DocumentEditor;
