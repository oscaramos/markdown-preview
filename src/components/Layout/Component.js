import clsx from "clsx";
import React from "react";

import makeStyles from "@mui/styles/makeStyles";

import { useStore } from "../../store";

const drawerWidth = 251;

const useStylesPage = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  containerShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function Layout({ children }) {
  const classes = useStylesPage();

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
