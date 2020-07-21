import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/HomeStyles";

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.home}>
        <h1 className={classes.logo}>coders-git.DEMO</h1>
        <div className={classes.container}>
          <p>
            Welcome! Check out the latest news, trending repos of github and
            it's coder stats.
          </p>
          <div className={classes.items}>
            <div className={classes.navitem}>
              <Link to="/news">News</Link>
            </div>
            <div className={classes.navitem}>
              <Link to="/trending">Trending</Link>
            </div>
            <div className={classes.navitem}>
              <Link to="/coderstats">CoderStats</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Home);
