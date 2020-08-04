import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import News from "./News";
import Home from "./Home";
import Stats from "./Stats";
import Trending from "./Trending";
import CoderStats from "./CoderStats";
import "./App.css";

class App extends Component {
  render() {
    const DefaultContainer = () => (
      <div>
        <Navbar />
        <Route
          exact
          path="/news"
          render={(routeProps) => (
            <div className="page">
              <News />
            </div>
          )}
        />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/coderstats" component={CoderStats} />
        <Route exact path="/coderstats/:username" component={Stats} />
      </div>
    );
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <div className="page">
              <Home />
            </div>
          )}
        />
        <Route component={DefaultContainer} />
      </Switch>
    );
  }
}
export default App;
