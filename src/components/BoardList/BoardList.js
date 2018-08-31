import React, { Component } from "react";
import BoardBox from "../BoardBox/BoardBox";
import AddBoard from "../AddBoard/AddBoard";
import "./BoardList.scss";

class BoardList extends Component {
  render() {
    const { boards, addBoard } = this.props;

    return (
      <div className="board-list">
        {boards.map(board => (
          <BoardBox key={board.id} {...board} />
        ))}
        <BoardBox color="red">
          <AddBoard addBoard={addBoard} />
        </BoardBox>
      </div>
    );
  }
}

export default BoardList;
