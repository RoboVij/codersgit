export default {
  home: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    height: "6vh",
    textAlign: "center",
  },
  logo: {
    fontFamily: "Courier New",
    marginTop: "100px",
    fontSize: "18px",
  },
  container: {
    position: "absolute",
    left: "50%",
    top: "30%",
    transform: "translate(-50%, -50%)",
    "& p": {
      marginBottom: "50px",
    },
  },
  items: {
    display: "block",
    fontSize: "30px",
    height: "100%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "25%",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  navitem: {
    backgroundColor: "#eceff1",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "10px",
    marginBottom: "10px",
  },
};
