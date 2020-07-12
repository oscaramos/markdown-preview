import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';
import CodeEditor from "../../components/CodeEditor";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Markdown from "react-markdown";
import TextField from "@material-ui/core/TextField";

const codeEditorStyle = {
  width: '100%',
  height: '100%',
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

function Page1() {
  const classes = useStyles();
  const classesPage = useStylesPage()
  const [markDownText, setMarkDownText] = useState('');
  const [documentName, setDocumentName] = useState('doc1.md');

  const onChangeEditor = (newValue) => {
    setMarkDownText(newValue);
  }

  return (
    <>
      <Meta
        title='Page 1'
        description='Page 1'
      />
      <Container maxWidth='lg' className={classes.root}>
        <Grid container direction='row' className={classesPage.container}>
          <Grid item container> {/* Hacky */}
            <TextField label='Document name' value={documentName} className={classesPage.documentNameInput}
            onChange={(e) => setDocumentName(e.target.value)} />
          </Grid>
          <Grid item container direction='row'>
            <Grid item xs={6}>
              <CodeEditor onChangeEditor={onChangeEditor} style={codeEditorStyle} />
            </Grid>
            <Grid item xs={6}>
              <div className={classesPage.convertedContainer}>
                <Markdown source={markDownText} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Page1;
