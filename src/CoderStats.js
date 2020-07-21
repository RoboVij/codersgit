import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/CoderStatsStyles";

class CoderStats extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <nav className={classes.nav}>
      //     <h1 className={classes.heading}>React Colors</h1>
      //     <Link to="/palette/new">Create Palette</Link>
      //   </nav>
      <header className={classes.CoderStats}>
        <div className={classes.logo}>
          <h1>CoderStats</h1>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(CoderStats);
