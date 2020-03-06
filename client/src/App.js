import React, { Component } from "react";
import LandingPage from "./Components/Layouts/LandingPage";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
