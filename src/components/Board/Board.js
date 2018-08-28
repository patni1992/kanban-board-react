import React, { Component } from "react";
import "./Board.scss";
class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    );
  }
}

export default Board;
