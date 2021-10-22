import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: 40,
    "& h6": {
      paddingLeft: 15,
    },
  },
  buttons: {
    marginTop: 30,
  },
}));

export default useStyles;
