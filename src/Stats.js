import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/StatsStyles";

class Stats extends Component {
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.Stats}>
        <div className={classes.logo}>
          <h1>Stats</h1>
        </div>
        {/* <div className={classes.info}>
          <div className={classes.profile - info}></div>
          <div className={classes.stats - info}></div>
        </div> */}
      </header>
    );
  }
}

export default withStyles(styles)(Stats);
