import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import Start from "./Start/start";
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:board?/:boardId?" component={Header} />
          <Route exact path="/" component={Start} />
          <Route path="/board/:boardId" component={Board} />
        </div>
      </Router>
    );
  }
}

export default App;
