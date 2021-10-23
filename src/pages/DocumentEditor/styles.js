import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  convertedContainer: {
    width: "100%",
    height: "90vh",
    backgroundColor: "white",
    overflowY: "scroll",
    display: "block",
    boxSizing: "border-box",
  },
  documentNameInput: {
    width: "100%",
  },
  codeEditorAndResultContainer: {
    height: "90vh",
  },
}));

export default useStyles;
