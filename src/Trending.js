import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/TrendingStyles";

class Trending extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <nav className={classes.nav}>
      //     <h1 className={classes.heading}>React Colors</h1>
      //     <Link to="/palette/new">Create Palette</Link>
      //   </nav>
      <header className={classes.Trending}>
        <div className={classes.logo}>
          <h1>Trending</h1>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Trending);
