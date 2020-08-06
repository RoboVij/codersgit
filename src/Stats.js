import React, { Component } from "react";
import dateFormat from "dateformat";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/StatsStyles";
import axios from "axios";
const API_URL = "https://api.github.com/users/";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null, repos: null };
    this.gatherData = this.gatherData.bind(this);
    this.reposData = this.reposData.bind(this);
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
      this.reposData(this.state.res.data.repos_url);
    } catch (error) {
      console.log(error.response);
      this.setState({
        res: error.response,
      });
    }
  }
  async reposData(url) {
    await axios.get(url).then((result) =>
      this.setState({
        repos: result.data[0],
      })
    );
    console.log(this.state.repos);
  }

  render() {
    const { classes } = this.props;
    const { username } = this.props.match.params;
    const { res, repos } = this.state;
    console.log(res);
    // console.log(repos);
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
              </div>
              <div className={classes.info}>
                <div className={classes.profileInfo}>
                  <p>{res.data.name === null ? username : res.data.name}</p>
                  <p>
                    Joined GutHub on{" "}
                    {dateFormat(res.data.created_at, "mmm d, yyyy")}
                  </p>
                  <p>{username}</p>
                  <p>{res.data.location}</p>
                  <img src={res.data.avatar_url} alt="new" />
                  <a href={res.data.html_url}>{username}</a>
                  <p>{res.data.blog}</p>
                  <p>{res.data.company}</p>
                </div>
                {/* {this.reposData(res.data.repos_url)} */}
                <div className={classes.statsInfo}>
                  <p>{res.data.public_repos}</p>
                  <p>{res.data.followers}</p>
                  <p>{res.data.following}</p>
                  <p>{repos.watchers}</p>
                  {/* <p>{res.data.lang}</p>
                  <p>{res.data.issues}</p>
                  <p>{res.data.forks}</p>
                  <p>{res.data.stars}</p> */}
                </div>
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
