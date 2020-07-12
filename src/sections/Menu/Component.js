import React, { useState } from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';

import { Link as RouterLink, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import { FaHome as WelcomeIcon, } from 'react-icons/fa';

import DescriptionIcon from '@material-ui/icons/Description';

import { isMobile } from 'utils';

import useStyles from './styles';
import { useStore } from "../../store";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

const StyledMenuItem = withStyles({ root: { width: '100%' } })(props => <MenuItem {...props} />);
const StyledMenuItemWithoutHover = withStyles({ root: {"&:hover": {backgroundColor: 'white', cursor: 'default'} } })(props => <StyledMenuItem {...props} />)

function Menu({ isOpen, onClose, onOpen, location, history }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  });

  const { state, actions } = useStore()

  const paramDocId = location.pathname.split('/')[location.pathname.split('/').length - 1];
  const selectedDocument = parseInt(paramDocId)

  const handleAddDocument = () => {
    actions.documents.addDocument()
  };

  const handleDeleteDocument = () => {
    const numDocuments = Object.keys(state.documents).length
    if( numDocuments > 1 ) {
      // If it's the last document
      if( selectedDocument === numDocuments - 1) {
        // Go to the new last document
        history.push(`/document/${selectedDocument-1}`)
      }
      actions.documents.deleteDocument(selectedDocument)
    }
  };

  return (
    <SwipeableDrawer
      anchor='left'
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={30}
      disableBackdropTransition={true}
      variant='persistent'
      edge='start'
    >
      <List className={classes.list}>
        <div className={classes.toolbar} />
        <StyledMenuItemWithoutHover onClick={onClose} component={RouterLink} to='/' >
          <ListItemText primary='Documents' />
        </StyledMenuItemWithoutHover>
        {/* ----- Documents ----- */}
        {
          Object.keys(state.documents).map((doc, index) => {
            return (
              <StyledMenuItem selected={index === selectedDocument} key={index} component={RouterLink}
                              to={`/document/${index}`}>
                <ListItemIcon>
                  <DescriptionIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary={doc} />
              </StyledMenuItem>
            )
          })
        }
        {/* -----Actions----- */}
        <Grid container direction='column' style={{ paddingLeft: '10%', paddingRight: '10%', marginTop: '1em' }}>
          <Grid item>
            <Button variant='outlined' color='primary' fullWidth onClick={handleAddDocument}>
              Add Document
            </Button>
          </Grid>
          <Grid item>
            <Button variant='text' color='secondary' fullWidth onClick={handleDeleteDocument}>
              Delete Document
            </Button>
          </Grid>
        </Grid>
      </List>
    </SwipeableDrawer>
  );
}

export default withRouter(Menu);
