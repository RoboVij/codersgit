import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <nav className={classes.nav}>
      //     <h1 className={classes.heading}>React Colors</h1>
      //     <Link to="/palette/new">Create Palette</Link>
      //   </nav>
      <header className={classes.Navbar}>
        <div className={classes.navitem}>
          <Link to="/" className={classes.logo}>
            codersgit
          </Link>
        </div>
        <div className={classes.navitem}>
          <Link to="/news">News</Link>
        </div>
        <div className={classes.navitem}>
          <Link to="/trending">Trending</Link>
        </div>
        <div className={classes.navitem}>
          <Link to="/coderstats">CoderStats</Link>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
