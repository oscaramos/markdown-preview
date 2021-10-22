import clsx from "clsx";
import React from "react";

import DividerMU from "@mui/material/Divider";

import useStyles from "./styles";

function Divider({ className, ...props }) {
  const classes = useStyles();

  return <DividerMU {...props} className={clsx(classes.root, className)} />;
}

export default Divider;
