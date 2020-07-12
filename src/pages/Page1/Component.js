import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';
import CodeEditor from "../../components/CodeEditor";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Markdown from "react-markdown";

const codeEditorStyle = {
  width: '100%',
  height: '100%',
  padding: 0
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
  }
}))

function Page1() {
  const classes = useStyles();
  const classesPage = useStylesPage()
  const [markDownText, setMarkDownText] = useState('');

  const onChangeEditor = (newValue) => {
    console.log(newValue);
    setMarkDownText(newValue);
  }

  return (
    <>
      <Meta
        title="Page 1"
        description="Page 1"
      />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container direction='row' className={classesPage.container}>
          <Grid item xs={6}>
            <CodeEditor onChange={onChangeEditor} style={codeEditorStyle}/>
          </Grid>
          <Grid item xs={6}>
            <div className={classesPage.convertedContainer}>
              <Markdown source={markDownText}/>
            </div>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default Page1;
