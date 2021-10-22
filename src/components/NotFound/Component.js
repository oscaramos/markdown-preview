import { messages } from "config";
import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useStyles from "./styles";

function NotFound() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h4" className={classes.message}>
        404 Not Found - {messages[404]}
      </Typography>
    </Box>
  );
}

export default NotFound;
