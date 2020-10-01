import React, { Component } from "react";
import dateFormat from "dateformat";
import { withStyles } from "@material-ui/styles";
import Repositories from "./Repositories";
import Issues from "./Issues";
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
    this.state = {
      res: null,
      repos: null,
      languages: {},
      stars: null,
      issues: null,
      forks: null,
      dominantLanguage: null,
    };
    this.gatherData = this.gatherData.bind(this);
    this.reposData = this.reposData.bind(this);
  }
  componentDidMount() {
    this.gatherData();
  }
  async gatherData(evt) {
    const { username } = this.props.match.params;
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      this.setState({
        res: res,
      });
      const repos = await axios.get(res.data.repos_url);
      this.setState({
        repos: repos,
      });
      if (repos.data.length > 0) {
        this.reposData(repos);
      }
    } catch (error) {
      console.log(error.response);
      this.setState({
        res: error.response,
      });
    }
  }
  reposData(repos) {
    const watchers = repos.data.reduce((acc, repo) => acc + repo.watchers, 0);
    const open_issues = repos.data.reduce(
      (acc, repo) => acc + repo.open_issues,
      0
    );
    const fork = repos.data.reduce((acc, repo) => acc + repo.forks, 0);
    const lang = repos.data.reduce((acc, repo) => {
      acc[repo.language] =
        acc[repo.language] === undefined ? 1 : (acc[repo.language] += 1);
      return acc;
    }, {});
    const maxKey = Object.keys(lang).reduce((a, b) =>
      lang[a] > lang[b] ? a : b
    );
    this.setState({
      languages: lang,
      stars: watchers,
      issues: open_issues,
      forks: fork,
      dominantLanguage: maxKey,
    });
  }

  render() {
    const { classes } = this.props;
    const { username } = this.props.match.params;
    const {
      res,
      repos,
      stars,
      issues,
      forks,
      languages,
      dominantLanguage,
    } = this.state;
    console.log(res);
    console.log(repos);
    console.log(username);
    return (
      <div className={classes.stats}>
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
                    {res.data.company === null ? (
                      []
                    ) : (
                      <p>
                        {res.data.company}{" "}
                        <BusinessCenterIcon fontSize="small" />
                      </p>
                    )}
                  </p>
                  <a href={res.data.blog}>
                    {res.data.blog === "" ? (
                      []
                    ) : (
                      <p>
                        {res.data.blog} <HomeIcon fontSize="small" />
                      </p>
                    )}
                  </a>
                  <p>
                    {res.data.location === null ? (
                      []
                    ) : (
                      <p>
                        {res.data.location} <LocationOnIcon fontSize="small" />
                      </p>
                    )}
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
                  {repos === null ? (
                    <p>...LOADING</p>
                  ) : repos.data.length < 1 ? (
                    []
                  ) : (
                    <div>
                      <p>
                        <StarIcon fontSize="small" /> Total stars: {stars}
                      </p>
                      <p>
                        <BugReportIcon fontSize="small" /> Total issues:{" "}
                        {issues}
                      </p>
                      <p>
                        <CallSplitIcon fontSize="small" /> Total forks: {forks}
                      </p>
                      <p>
                        <GTranslateIcon fontSize="small" /> Main languages:{" "}
                        {Object.keys(languages).length}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {repos === null ? (
                <p>...LOADING</p>
              ) : repos.data.length < 1 ? (
                []
              ) : (
                <div className={classes.repos}>
                  {res.data.public_repos > 4 && (
                    <div className={classes.summary}>
                      <h1>Summary</h1>
                      <p>
                        {res.data.name === null ? username : res.data.name} has{" "}
                        {res.data.public_repos} repositories on GitHub, the
                        latest {res.data.public_repos}
                        with user activity were loaded from GitHub's web service
                        for this evaluation.{" "}
                        {res.data.name === null ? username : res.data.name} has
                        pushed to {res.data.public_repos} of these repositories.
                        This is a high ratio congratulations!
                      </p>
                      {Object.keys(languages).length > 1 && (
                        <p>
                          {Object.keys(languages).length} different main
                          languages were identified across all repos pushed to.
                          The main language is the one with the largest amount
                          of code in a given repository, as identified by
                          GitHub's{" "}
                          <a href="https://github.com/github/linguist">
                            linguist
                          </a>
                          . {dominantLanguage} occurs most frequently ‒{" "}
                          {languages[dominantLanguage]} times ‒ as the main repo
                          language.
                        </p>
                      )}
                      {forks > 9 && (
                        <p>
                          The total number of forks across all pushed to
                          repositories indicates that the GitHub projects {res.data.name === null ? username : res.data.name} contributes to are actually used by other
                          people.
                        </p>
                      )}
                    </div>
                  )}
                  <h1>Repositories</h1>
                  <Repositories repos={this.state.repos.data} />
                  {/* <Issues repos={this.state.repos.data} /> */}
                  {/* <LatestIssues repos={this.state.repos.data} /> */}
                </div>
              )}
            </div>
          )
        ) : (
          <p>...LOADING</p>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Stats);
