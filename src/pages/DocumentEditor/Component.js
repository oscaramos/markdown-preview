import clsx from "clsx";
import React from "react";
import Markdown from "react-markdown";
import { useHistory } from "react-router-dom";

import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import makeStyles from "@mui/styles/makeStyles";

import CodeEditor from "components/CodeEditor";
import Layout from "components/Layout";
import Meta from "components/Meta";

import { useStore } from "../../store";

export const drawerWidth = 251;

const codeEditorStyle = {
  width: "100%",
  height: "90%",
  padding: 0,
  overflowY: "scroll",
};

const useStylesPage = makeStyles((theme) => ({
  convertedContainer: {
    width: "100%",
    // height: '100vh',
    backgroundColor: "white",
    overflowX: "scroll",
    overflowY: "scroll",
    display: "block",
    boxSizing: "border-box",
  },
  documentNameInput: {
    width: "100%",
  },
  codeEditorAndResultContainer: {
    height: "100vh",
  },
}));

function DocumentEditor({ match }) {
  const { state, actions } = useStore();
  const theme = useTheme();
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));

  const classes = useStylesPage();

  const documentId = match.params.docId;
  const document = state.documents.find(
    (document) => document.id === documentId
  );

  const history = useHistory();

  const onChangeEditor = (newValue) => {
    // Set markdown text
    actions.documents.setMarkdownText({
      documentId,
      newDocumentText: newValue,
    });
  };

  const themeMode = state.theme.mode;
  const openDrawer = state.drawer.open;

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
        >
          <Grid item xs={12} sm={6}>
            <CodeEditor
              key={documentId}
              onChangeEditor={onChangeEditor}
              style={codeEditorStyle}
              setValue={document.markdownText}
              themeMode={themeMode}
            />
          </Grid>
          {matchXS ? (
            <></>
          ) : (
            <Grid item xs={0} sm={6}>
              <div
                className={classes.convertedContainer}
                style={{
                  backgroundColor: themeMode === "dark" ? "#44475A" : "#ffffff",
                }}
              >
                <Markdown source={document.markdownText} />
              </div>
            </Grid>
          )}
        </Grid>
      </Layout>
    </>
  );
}

export default DocumentEditor;
