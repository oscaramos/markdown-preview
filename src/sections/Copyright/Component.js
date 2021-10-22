import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { copyright, domain } from "config";
import React from "react";

import useStyles from "./styles";

function Copyright() {
  const classes = useStyles();

  return (
    <Box pt={2} pb={2}>
      <Typography
        className={classes.copyright}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {copyright.title}
        <Link color="inherit" href={domain}>
          {copyright.link}
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Copyright;
