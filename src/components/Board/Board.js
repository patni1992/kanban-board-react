import React, { Component } from "react";

class Board extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Board;
