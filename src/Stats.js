import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/StatsStyles";
import axios from "axios";
const API_URL = "https://api.github.com/users/";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null };
    this.gatherData = this.gatherData.bind(this);
  }
  componentDidMount() {
    this.gatherData();
  }
  async gatherData(evt) {
    const { username } = this.props.match.params;
    try {
      await axios
        .get(`https://api.github.com/users/${username}`)
        .then((result) =>
          this.setState({
            res: result,
          })
        );
    } catch (error) {
      console.log(error.response);
      this.setState({
        res: error.response,
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { username } = this.props.match.params;
    const { res } = this.state;
    console.log(res);
    console.log(username);

    return (
      <header className={classes.Stats}>
        {res !== null ? (
          res.status === 404 ? (
            <p>USER NOT FOUND</p>
          ) : (
            <div>
              <div className={classes.logo}>
                <h1>Stats</h1>
                <p>
                  {res.data.login}, {res.data.location}, {username}
                </p>
              </div>
              <div className={classes.info}>
                <div className={classes.profileInfo}></div>
                <div className={classes.statsInfo}></div>
              </div>
            </div>
          )
        ) : (
          <p>...LOADING</p>
        )}
      </header>
    );
  }
}

export default withStyles(styles)(Stats);
