import clsx from "clsx";
import { repository, title } from "config";
import React from "react";
import { useStore } from "store";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DividerMU from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import CloseIcon from "@mui/icons-material/Close";

import withStyles from "@mui/styles/withStyles";

import {
  FaBars as MenuIcon,
  FaBrush as BrushIcon,
  FaGithub as GithubIcon,
  FaRedo as RedoIcon,
} from "react-icons/fa";

import Link from "components/Link";

import useStyles from "./styles";

const Divider = withStyles({
  root: {
    "margin-left": 7,
    "margin-right": 7,
  },
})((props) => <DividerMU flexItem orientation="vertical" {...props} />);

function AppBar_({ isMenuOpen, onMenuToggle }) {
  const classes = useStyles();
  const { state, actions } = useStore();

  function handleToggleTheme() {
    actions.theme.toggle();
  }

  function handleAppUpdate() {
    actions.sw.update();
  }

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isMenuOpen,
      })}
      color="transparent"
      elevation={1}
    >
      <Toolbar className={classes.toolbar}>
        <Box display="flex" className={classes.main}>
          <IconButton
            edge="start"
            aria-label="open menu"
            onClick={onMenuToggle}
            size="large"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Link to="/">
            <Button aria-label="go to home" className={classes.title}>
              {title}
            </Button>
          </Link>
        </Box>
        <Box display="flex">
          {state.sw.isUpdated && (
            <>
              <Tooltip
                title="The application has newer version; press to update"
                arrow
              >
                <IconButton
                  aria-label="update the application"
                  color="secondary"
                  onClick={handleAppUpdate}
                  size="large"
                >
                  <RedoIcon />
                </IconButton>
              </Tooltip>
              <Divider />
            </>
          )}
          <Tooltip title="It's open source" arrow>
            <IconButton
              aria-label="go to github page"
              component="a"
              target="_blank"
              rel="noreferrer"
              href={repository}
              size="large"
            >
              <GithubIcon />
            </IconButton>
          </Tooltip>
          <Divider />
          <Tooltip title="Change theme" arrow>
            <IconButton
              aria-label="toggle theme"
              edge="end"
              onClick={handleToggleTheme}
              size="large"
            >
              <BrushIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar_;
