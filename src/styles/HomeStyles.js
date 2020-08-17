export default {
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Courier New",
    marginTop: "80px",
    fontSize: "18px",
  },
  container: {
    textAlign: "center",
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
    textAlign: "center",
    fontSize: "30px",
    height: "100%",
    width: "60%",
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
