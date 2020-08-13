export default {
  stats: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
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
    marginBottom: "25px",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  profileInfo: {
    width: "45%",
    textAlign: "right",
    marginRight: "75px",
    "& a": {
      textDecoration: "none",
      color: "blue",
    },
  },
  avatar: { width: "10%" },
  statsInfo: {
    width: "45%",
    marginLeft: "75px",
    textAlign: "left",
    "& a": {
      textDecoration: "none",
      color: "blue",
    },
  },
  repos: {
    width: "97%",
    marginLeft: "25px",
    "& a": {
      textDecoration: "none",
      color: "blue",
    },
  },
  summary: {
    width: "75%",
    marginLeft: "13%",
    marginBottom: "45px",
  },
};
