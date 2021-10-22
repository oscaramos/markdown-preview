import { last } from "lodash";
import { useConfirm } from "material-ui-confirm";
import React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { isMobile } from "utils";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import TextField from "@mui/material/TextField";

import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";

import withStyles from "@mui/styles/withStyles";

import { useStore } from "../../store";
import useStyles from "./styles";

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

  const confirm = useConfirm();

  const paramDocId = last(location.pathname.split("/"));

  const newTitle = React.useRef("");

  const handleEditTitle = async (documentId) => {
    try {
      await confirm({
        title: "Edit title",
        confirmationText: "Edit",
        confirmationButtonProps: {
          variant: "contained",
        },
        content: (
          <TextField
            autoFocus
            id="title"
            label="New title"
            fullWidth
            variant="standard"
            onChange={(e) => (newTitle.current = e.target.value)}
          />
        ),
      });

      actions.documents.setDocumentName({
        documentId,
        newDocumentName: newTitle.current,
      });
    } catch (e) {}
  };

  const handleAddDocument = async () => {
    try {
      await confirm({
        title: "Add new document",
        confirmationText: "Add",
        confirmationButtonProps: {
          variant: "contained",
        },
        content: (
          <TextField
            autoFocus
            id="title"
            label="Title"
            fullWidth
            variant="standard"
            onChange={(e) => (newTitle.current = e.target.value)}
          />
        ),
      });

      actions.documents.addDocument({ title: newTitle.current });
    } catch (e) {}
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
              <IconButton
                aria-label="edit"
                onClick={async (e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  await handleEditTitle(doc.id);
                }}
                size="large"
              >
                <EditIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="delete"
                onClick={async (e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  await handleEditTitle(doc.id);
                }}
                size="large"
              >
                <DeleteIcon fontSize="small" />
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
  );
}

export default withRouter(Menu);
