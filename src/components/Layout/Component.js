import clsx from "clsx";
import React from "react";

import { useStore } from "../../store";
import useStyles from "./styles";

export default function Layout({ children }) {
  const classes = useStyles();

  const { state } = useStore();

  const openDrawer = state.drawer.open;

  return (
    <div
      className={clsx(classes.container, {
        [classes.containerShift]: openDrawer,
      })}
    >
      {children}
    </div>
  );
}
