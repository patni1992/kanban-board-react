import React, { Component } from "react";

class Board extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.rows.map(row => (
            <li>{row.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Board;
