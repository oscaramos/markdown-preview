import { messages } from "config";
import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useStyles from "./styles";

function LoaderErrorBoundaryFallback() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5">{messages.loader.fail}</Typography>
    </Box>
  );
}

export default LoaderErrorBoundaryFallback;
