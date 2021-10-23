import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  convertedContainer: {
    width: "100%",
    backgroundColor: "white",
    overflowX: "scroll",
    overflowY: "scroll",
    display: "block",
    boxSizing: "border-box",
  },
  documentNameInput: {
    width: "100%",
  },
  codeEditorAndResultContainer: {
    height: "100vh",
  },
}));

export default useStyles;
