import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles/CoderStatsStyles";
import Button from "@material-ui/core/Button";

class CoderStats extends Component {
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.CoderStats}>
        <div className={classes.logo}>
          <h1>CoderStats</h1>
        </div>
        <div className={classes.search}>
          <InputBase
            placeholder="GitHub user name or organisation"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Get Stats
          </Button>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(CoderStats);
