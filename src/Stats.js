import React, { Component } from "react";
import dateFormat from "dateformat";
import { withStyles } from "@material-ui/styles";
import Repositories from "./Repositories";
import styles from "./styles/StatsStyles";
import axios from "axios";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BugReportIcon from "@material-ui/icons/BugReport";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import InsertChartIcon from "@material-ui/icons/InsertChart";

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
      axios.get(this.state.res.data.repos_url).then((result) =>
        this.setState({
          repos: result,
        })
      );
    } catch (error) {
      console.log(error.response);
      this.setState({
        res: error.response,
      });
    }
  }
  reposData() {
    const stars = this.state.repos.data.reduce(
      (acc, repo) => acc + repo.watchers,
      0
    );
    const issues = this.state.repos.data.reduce(
      (acc, repo) => acc + repo.open_issues,
      0
    );
    const forks = this.state.repos.data.reduce(
      (acc, repo) => acc + repo.forks,
      0
    );
    const languages = this.state.repos.data.reduce((acc, repo) => {
      acc[repo.language] =
        acc[repo.language] === undefined ? 1 : (acc[repo.language] += 1);
      return acc;
    }, {});
    return (
      <div>
        <p>
          <StarIcon fontSize="small" /> Total stars: {stars}
        </p>
        <p>
          <BugReportIcon fontSize="small" /> Total issues: {issues}
        </p>
        <p>
          <CallSplitIcon fontSize="small" /> Total forks: {forks}
        </p>
        <p>
          <GTranslateIcon fontSize="small" /> Main languages:{" "}
          {Object.keys(languages).length}
        </p>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { username } = this.props.match.params;
    const { res, repos } = this.state;
    console.log(res);
    console.log(repos);
    console.log(username);
    return (
      <header className={classes.stats}>
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
                    Joined GitHub on{" "}
                    {dateFormat(res.data.created_at, "mmm d, yyyy")}
                  </p>
                  <a href={res.data.html_url}>
                    {username} <GitHubIcon fontSize="small" />
                  </a>
                  <p>
                    {res.data.company} <BusinessCenterIcon fontSize="small" />
                  </p>
                  <a href={res.data.blog}>
                    {res.data.blog} <HomeIcon fontSize="small" />
                  </a>
                  <p>
                    {res.data.location} <LocationOnIcon fontSize="small" />
                  </p>
                </div>
                <img
                  className={classes.avatar}
                  src={res.data.avatar_url}
                  alt="new"
                />
                <div className={classes.statsInfo}>
                  <p>
                    <InsertChartIcon fontSize="small" /> Pushed to repos:{" "}
                    {res.data.public_repos}
                  </p>
                  <p>
                    <PeopleIcon fontSize="small" /> Followers:{" "}
                    {res.data.followers}
                  </p>
                  <p>
                    <PersonIcon fontSize="small" /> Following:{" "}
                    {res.data.following}
                  </p>
                  {repos === null ? <p>...LOADING</p> : this.reposData()}
                </div>
              </div>
              <div className={classes.repos}>
                {repos === null ? (
                  <p></p>
                ) : (
                  <Repositories repos={this.state.repos.data} />
                )}
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
