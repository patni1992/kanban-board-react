import React, { Component } from "react";
import List from "../List/List";
import "./Board.scss";

class Board extends Component {
  render() {
    const { color, title } = this.props;
    return (
      <div>
        <section class={`board-info-bar ${color}`}>
          <div class="board-controls">
            <button class="board-title btn">
              <h2>{title}</h2>
            </button>
          </div>
        </section>
        <section class={`lists-container ${color}`}>
          {this.props.lists.map(list => (
            <List color={color} {...list} />
          ))}
          <button class={`add-list-btn btn darken-${color}`}>Add a list</button>
        </section>
      </div>
    );
  }
}

export default Board;
