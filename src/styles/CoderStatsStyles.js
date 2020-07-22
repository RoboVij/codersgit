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
    // marginTop: "100px",
    fontSize: "18px",
    // fontFamily: "Roboto",
    height: "100%",
    // display: "flex",
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
    top: "30%",
    transform: "translate(-50%, -50%)",
    borderRadius: "3%",
    backgroundColor: "#eceff1",
    margin: "20px",

    "&:hover": {
      backgroundColor: "#bcc1c4",
    },
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    // pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: "30px",
    // padding: "50px",
    fontSize: "30px",
  },
};

export default styles;
