import React, { Component } from "react";
import axios from "axios";
// import { withStyles } from "@material-ui/styles";
import LatestIssues from "./LatestIssues";

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = { pulls: null };
    this.gatherData = this.gatherData.bind(this);
  }
  //   componentDidMount() {
  //     this.gatherData();
  //   }
  async gatherData(repos) {
    const hasPulls = repos.map((repo) => {
      if (repo.open_issues > 0) {
        axios.get(`${repo.url}/pulls`).then(
          (result) => this.setState({ pulls: { ...result } })
          // this.setState({ pulls: { ...this.state.pulls, ...result } })
          //   this.setState((prevState) => ({
          //     pulls: [...prevState.pulls, result],
          //   }))
        );
        // return;
      }
    });
  }
  render() {
    const { classes, repos } = this.props;
    this.gatherData(repos);
    // const { pulls } = this.state;
    // console.log(this.state.pulls);
    return <h1>jaj</h1>;
  }
}

export default Issues;
