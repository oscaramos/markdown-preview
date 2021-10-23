import clsx from "clsx";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Grid from "@mui/material/Grid";

import makeStyles from "@mui/styles/makeStyles";

import Meta from "../../components/Meta";
import { useStore } from "../../store";
import { drawerWidth } from "../DocumentEditor/Component";

const useStylesPage = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  containerShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
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

function Welcome() {
  const { state } = useStore();
  const classes = useStylesPage();

  const history = useHistory();

  useEffect(() => {
    // Redirect to the first page
    if (state.documents.length > 0) {
      history.push(`/document/${state.documents[0].id}`);
    }
  }, []);

  return (
    <>
      <Meta title="Document editor" description="Document editor" />
      <Grid
        container
        direction="row"
        className={clsx(classes.container, {
          [classes.containerShift]: state.drawer.open,
        })}
      >
        <Grid
          item
          container
          direction="row"
          className={classes.codeEditorAndResultContainer}
        >
          Add a new document
        </Grid>
      </Grid>
    </>
  );
}

export default Welcome;
