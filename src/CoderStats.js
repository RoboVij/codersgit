import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles/CoderStatsStyles";
import Button from "@material-ui/core/Button";

class CoderStats extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.title = "codersgit | CoderStats";
  }
  handleChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.history.push(`/coderstats/${this.state.username}`);
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.CoderStats}>
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
            value={this.state.username}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <Link
            className={classes.link}
            to={`/coderstats/${this.state.username}`}
          >
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<SearchIcon />}
              // onSubmit={this.handleClick}
            >
              Get Stats
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(CoderStats));
// export default withStyles(styles)(CoderStats);
