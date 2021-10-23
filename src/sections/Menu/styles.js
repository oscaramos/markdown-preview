import makeStyles from "@mui/styles/makeStyles";

export const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  list: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

export default useStyles;
