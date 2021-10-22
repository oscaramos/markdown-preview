import Box from "@mui/material/Box";
import React from "react";

import useStyles from "./styles";

const Page = (props) => {
  const classes = useStyles();

  return <Box className={classes.root}>{props.children}</Box>;
};

export default Page;
