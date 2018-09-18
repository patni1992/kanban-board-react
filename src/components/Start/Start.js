import React, { Component } from "react";
import BoardList from "../BoardList/BoardList";
import "./Start.scss";

class Start extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Boards</h1>
        <div className="container">
          <BoardList />
        </div>
      </div>
    );
  }
}

export default Start;
