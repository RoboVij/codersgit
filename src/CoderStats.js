import React, { Component } from "react";
import { Link, BrowserRouter, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import styles from "./styles/CoderStatsStyles";
import Button from "@material-ui/core/Button";
const API_URL = "https://api.github.com/users/praveen7557";

class CoderStats extends Component {
  constructor(props) {
    super(props);
    this.state = { userFound: null, res: null };
    this.gatherData = this.gatherData.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {}
  async gatherData(evt) {
    await axios.get(API_URL).then((result) =>
      this.setState({
        res: result.data,
      })
    );
    // this.state.userFound = res.data.message;
    // this.setState({ userFound: userFound });
  }
  handleClick = () => {
    // this.gatherData();
    // if (this.state.userFound) {
    // return <Redirect to="/coderstats/stats" />;
    this.props.history.push(`/coderstats/stats`);
    // }
  };
  render() {
    const { classes } = this.props;
    const { data } = this.state;
    console.log(data);
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
            // onSubmit={this.handleClick}
            onClick={this.gatherData}
          >
            <p>{data}</p>
            <Link data={data} to="/coderstats/stats">
              Get Stats
            </Link>
            {/* Get Stats */}
          </Button>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(CoderStats);
