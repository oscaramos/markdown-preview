import React from "react";
import { last } from "lodash";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";

import { Link as RouterLink, withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import EditIcon from "@material-ui/icons/Edit";
import DescriptionIcon from "@material-ui/icons/Description";

import { isMobile } from "utils";

import useStyles from "./styles";
import { useStore } from "../../store";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@material-ui/core";

const StyledMenuItem = withStyles({ root: { width: "100%" } })((props) => (
  <MenuItem {...props} />
));
const StyledMenuItemWithoutHover = withStyles({
  root: { "&:hover": { backgroundColor: "white", cursor: "default" } },
})((props) => <StyledMenuItem {...props} />);

function Menu({ isOpen, onClose, onOpen, location, history }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  });

  const { state, actions } = useStore();

  const paramDocId = last(location.pathname.split("/"));

  const [openNewTitle, setOpenNewTitle] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const [documentId, setDocumentId] = React.useState(0);

  const handleClickOpen = () => {
    setOpenNewTitle(true);
  };

  const handleClose = () => {
    setOpenNewTitle(false);
  };

  const handleAddDocument = () => {
    actions.documents.addDocument();
  };

  const handleChangeDocumentName = () => {
    actions.documents.setDocumentName({
      documentId,
      newDocumentName: newTitle,
    });
  };

  const handleDeleteDocument = () => {
    const numDocuments = state.documents.length;
    if (numDocuments <= 1) {
      return;
    }
    if (paramDocId === numDocuments - 1) {
      history.push(`/document/${paramDocId - 1}`);
    }
    actions.documents.deleteDocument(paramDocId);
  };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        swipeAreaWidth={30}
        disableBackdropTransition={true}
        variant="persistent"
        edge="start"
      >
        <List className={classes.list}>
          <div className={classes.toolbar} />
          <StyledMenuItemWithoutHover
            onClick={onClose}
            component={RouterLink}
            to="/"
          >
            <ListItemText primary="Documents" />
          </StyledMenuItemWithoutHover>
          {/* ----- Documents ----- */}
          {state.documents.map((doc) => {
            return (
              <StyledMenuItem
                selected={doc.id === paramDocId}
                key={doc.id}
                component={RouterLink}
                to={`/document/${doc.id}`}
              >
                <ListItemIcon>
                  <DescriptionIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={doc.title} />
                <IconButton aria-label="edit">
                  <EditIcon
                    fontSize="small"
                    onClick={() => {
                      handleClickOpen();
                      setDocumentId(doc.id);
                    }}
                  />
                </IconButton>
              </StyledMenuItem>
            );
          })}
          {/* -----Actions----- */}
          <Grid
            container
            direction="column"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              marginTop: "1em",
            }}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleAddDocument}
              >
                Add Document
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                color="secondary"
                fullWidth
                onClick={handleDeleteDocument}
              >
                Delete Document
              </Button>
            </Grid>
          </Grid>
        </List>
      </SwipeableDrawer>

      <Dialog open={openNewTitle} onClose={handleClose}>
        <DialogTitle>Edit title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="New title"
            fullWidth
            variant="standard"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleChangeDocumentName();
              handleClose();
              setNewTitle("");
            }}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default withRouter(Menu);
