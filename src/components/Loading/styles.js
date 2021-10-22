import makeStyles from "@mui/styles/makeStyles";





const useStyles = makeStyles((theme) => ({
  preloader: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "background-color": theme.palette.background.default,
  },
  open: {
    background: "none",
  },
}));

export default useStyles;
