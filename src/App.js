import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <header>
            <Navbar />
            <Switch location={location}>
              <Route
                exact
                path="/news"
                render={(routeProps) => (
                  <div className="page">
                    <News />
                  </div>
                )}
              />
              <Route
                exact
                path="/trending"
                render={(routeProps) => (
                  <div className="page">
                    <Trending />
                  </div>
                )}
              />
              <Route
                exact
                path="/coderstats"
                render={(routeProps) => (
                  <div className="page">
                    <CoderStats />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <div className="page">
                    <Home />
                  </div>
                )}
              />
            </Switch>
          </header>
        )}
      />
    );
  }
}
export default App;
