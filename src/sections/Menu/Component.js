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

const StyledMenuItem = withStyles({ root: { width: '100%' } })(props => <MenuItem {...props} />);

function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  });

  const { state } = useStore()

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={30}
      disableBackdropTransition={true}
    >
      <List className={classes.list}>
        <div className={classes.toolbar} />
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/">
          <ListItemIcon>
            <WelcomeIcon />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </StyledMenuItem>
        {/* ----- Documents ----- */}
        {
          Object.keys(state.documents).map((doc, index) => {
            return (
              <StyledMenuItem key={index} onClick={onClose} component={RouterLink} to={`/page-1/${index}`}>
                <ListItemIcon>
                  <DescriptionIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary={doc} />
              </StyledMenuItem>
            )
          })
        }
      </List>
    </SwipeableDrawer>
  );
}

export default Menu;
