import { fade, makeStyles } from "@material-ui/core/styles";

const styles = {
  CoderStats: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    height: "6vh",
    textAlign: "center",
  },
  logo: {
    fontFamily: "Courier New",
    marginTop: "50px",
    fontSize: "8px",
    // fontFamily: "Ubuntu",
    height: "100%",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  search: {
    display: "flex",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "33%",
    transform: "translate(-50%, -50%)",
    borderRadius: "2%",
    height: "100px",
    backgroundColor: "#eceff1",
    margin: "20px",
    "&:hover": {
      backgroundColor: "#bcc1c4",
    },
  },
  button: {
    width: "150px",
    height: "40%",
    fontFamily: "Ubuntu",
    position: "relative",
    left: "7%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: "30px",
    width: "700px",
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "Ubuntu",
  },
};

export default styles;
