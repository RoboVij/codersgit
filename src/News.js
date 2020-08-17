import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NewsStyles";

class News extends Component {
  componentDidMount() {
    document.title = "codersgit | News";
  }
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.News}>
        <div className={classes.logo}>
          <h1>Work In Progress</h1>
          <Link className={classes.link} to="/coderstats">
            Want to see something?
          </Link>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(News);
