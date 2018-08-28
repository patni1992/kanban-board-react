import React, { Component } from "react";
import Board from "../Board/Board";
import "./Start.scss";

class Start extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Boards</h1>
          <Board />
        </div>
      </div>
    );
  }
}

export default Start;
