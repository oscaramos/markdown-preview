import makeStyles from "@mui/styles/makeStyles";

import { drawerWidth } from "../Menu/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    "justify-content": "space-between",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  main: {
    "align-items": "center",
  },
  title: {
    "font-weight": 100,
  },
}));

export default useStyles;
