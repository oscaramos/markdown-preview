import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';

import { Link as RouterLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import {
  FaHome as WelcomeIcon,
} from 'react-icons/fa';

import DescriptionIcon from '@material-ui/icons/Description';

import { isMobile } from 'utils';

import useStyles from './styles';
import { useStore } from "../../store";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const StyledMenuItem = withStyles({ root: { width: '100%' } })(props => <MenuItem {...props} />);

function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  });

  const { state, actions } = useStore()

  function handleAddDocument() {
    actions.documents.addDocument()
  }

  function handleDeleteDocument() {
    // actions.documents.addDocument()
  }

  return (
    <SwipeableDrawer
      anchor='left'
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={30}
      disableBackdropTransition={true}
    >
      <List className={classes.list}>
        <div className={classes.toolbar} />
        <StyledMenuItem onClick={onClose} component={RouterLink} to='/'>
          <ListItemIcon>
            <WelcomeIcon />
          </ListItemIcon>
          <ListItemText primary='Welcome' />
        </StyledMenuItem>
        {/* ----- Documents ----- */}
        {
          Object.keys(state.documents).map((doc, index) => {
            return (
              <StyledMenuItem key={index} component={RouterLink} to={`/page-1/${index}`}>
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

export default Menu;
