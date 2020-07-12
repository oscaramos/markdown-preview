import React from 'react';
import Markdown from "react-markdown";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Meta from 'components/Meta';
import CodeEditor from "../../components/CodeEditor";
import { useStore } from "../../store";

const codeEditorStyle = {
  width: '100%',
  height: '90%',
  padding: 0,
  overflowY: 'scroll'
}

const useStylesPage = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%'
  },
  convertedContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
    overflowX: 'scroll',
    overflowY: 'scroll',
    display: 'block',
    boxSizing: 'border-box'
  },
  documentNameInput: {
    width: '100%'
  }
}))

function Page1(props) {
  const { state, actions } = useStore();

  const classes = useStylesPage()

  const documentId = props.match.params.docId;
  const documentName = actions.documents.getDocumentName(documentId);
  const markDownText = state.documents[documentName].markdownText;

  const onChangeEditor = (newValue) => {
    // Set markdown text
    actions.documents.setMarkdownText({ documentId, newDocumentText: newValue });
  }

  const onChangeDocumentName = (newValue) => {
    // Set document name
    actions.documents.setDocumentName({ documentId, newDocumentName: newValue });
  }

  let themeMode = state.theme.mode;
  return (
    <>
      <Meta
        title='Page 1'
        description='Page 1'
      />
      {/*<Container maxWidth='lg' className={classes.root}>*/}
        <Grid container direction='row' className={classes.container}>
          <Grid item container> {/* Hacky */}
            <TextField label='Document name' value={documentName} className={classes.documentNameInput}
                       onChange={(e) => onChangeDocumentName(e.target.value)} />
          </Grid>
          <Grid item container direction='row'>
            <Grid item xs={6}>
              <CodeEditor onChangeEditor={onChangeEditor} style={codeEditorStyle} setValue={markDownText} themeMode={themeMode} />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.convertedContainer} style={{ backgroundColor: themeMode === 'dark'? '#44475A': '#ffffff' }}>
                <Markdown source={markDownText} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      {/*</Container>*/}
    </>
  );
}

export default Page1;
