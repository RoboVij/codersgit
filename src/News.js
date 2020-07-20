import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NewsStyles";

class News extends Component {
  render() {
    // const { classes } = this.props;
    return (
      // <nav className={classes.nav}>
      //     <h1 className={classes.heading}>React Colors</h1>
      //     <Link to="/palette/new">Create Palette</Link>
      //   </nav>
      <header className={classes.News}>
        <div className={classes.logo}>
          <Link to="/">coders-git.DEMO</Link>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(News);
