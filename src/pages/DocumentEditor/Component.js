import React from 'react';
import Markdown from "react-markdown";
import clsx from 'clsx'

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Meta from 'components/Meta';
import CodeEditor from "../../components/CodeEditor";
import { useStore } from "../../store";
import { useMediaQuery } from "@material-ui/core";

const drawerWidth = 251

const codeEditorStyle = {
  width: '100%',
  height: '90%',
  padding: 0,
  overflowY: 'scroll'
}

const useStylesPage = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  containerShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  convertedContainer: {
    width: '100%',
    // height: '100vh',
    backgroundColor: 'white',
    overflowX: 'scroll',
    overflowY: 'scroll',
    display: 'block',
    boxSizing: 'border-box'
  },
  documentNameInput: {
    width: '100%'
  },
  codeEditorAndResultContainer: {
    height: '100vh',
  }
}))

function Page1(props) {
  const { state, actions } = useStore();
  const theme = useTheme()
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'))

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

  const themeMode = state.theme.mode;
  const openDrawer = state.drawer.open;

  return (
    <>
      <Meta
        title='Document editor'
        description='Document editor'
      />
      <Grid container direction='row' className={clsx(classes.container, {
        [classes.containerShift]: openDrawer
      })}>
        <Grid item container> {/* Hacky */}
          <TextField label='Document name' value={documentName} className={classes.documentNameInput}
                     onChange={(e) => onChangeDocumentName(e.target.value)} />
        </Grid>
        <Grid item container direction='row' className={classes.codeEditorAndResultContainer}>
          <Grid item xs={12} sm={6}>
            <CodeEditor onChangeEditor={onChangeEditor} style={codeEditorStyle} setValue={markDownText}
                        themeMode={themeMode} />
          </Grid>
          {
            matchXS ? <></>
              :
              <Grid item xs={0} sm={6}>
                <div className={classes.convertedContainer}
                     style={{ backgroundColor: themeMode === 'dark' ? '#44475A' : '#ffffff' }}>
                  <Markdown source={markDownText} />
                </div>
              </Grid>
          }
        </Grid>
      </Grid>
    </>
  );
}

export default Page1;
