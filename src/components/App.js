import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./Start/start";
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Start} />
        </Router>
      </div>
    );
  }
}

export default App;
