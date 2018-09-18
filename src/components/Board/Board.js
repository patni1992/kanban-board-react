import React, { Component } from "react";
import { connect } from "react-redux";
import List from "../List/List";
import "./Board.scss";

class Board extends Component {
  render() {
    const {
      board: { color, title }
    } = this.props;

    return (
      <div>
        <section class={`board__info-bar ${color}`}>
          <h2 className="board__title">{title}</h2>
        </section>
        <section class={`board__lists-container ${color}`}>
          {this.props.lists.map(list => (
            <List color={color} {...list} />
          ))}
          <button class={`board_add-list-btn  darken-${color}`}>
            Add a list
          </button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const board = state.boards[ownProps.match.params.boardId];
  const lists = board.lists.map(listId => state.lists[listId]);

  return {
    board,
    lists
  };
};

export default connect(mapStateToProps)(Board);
