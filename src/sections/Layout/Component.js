import React from "react";

import Box from "@mui/material/Box";

import Content from "sections/Content";
import Navigation from "sections/Navigation";
import Notifications from "sections/Notifications";

import useStyles from "./styles";

function Layout() {
  const classes = useStyles();

  return (
    <>
      <Notifications />
      <Navigation />
      <Box component="main" className={classes.wrapper}>
        <Box className={classes.spacer} />
        <Box className={classes.content}>
          <Content />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
