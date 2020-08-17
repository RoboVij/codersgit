import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "./styles/FooterStyles";

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <hr />
      <a href="https://github.com/RoboVij/codersgit-demo">
        <GitHubIcon />
      </a>
      <a href="mailto:robovij83@gmail.com">
        <MailIcon />
      </a>
      <a href="https://www.linkedin.com/in/vijender-bolla-7279a751/">
        <LinkedInIcon />
      </a>
      <p>
        <Link to="/">codersgit</Link> is a free service that displays statistics
        for coders with public Git repositories on GitHub.
      </p>
    </footer>
  );
}
export default withStyles(styles)(Footer);
