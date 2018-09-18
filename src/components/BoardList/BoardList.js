import React, { Component } from "react";
import BoardBox from "../BoardBox/BoardBox";
import AddBoard from "../AddBoard/AddBoard";
import { connect } from "react-redux";
import { addNewBoard } from "../../actions/boards";
import "./BoardList.scss";

class BoardList extends Component {
  render() {
    const { boards, addNewBoard } = this.props;
    return (
      <div className="board-list">
        {boards.map(board => (
          <BoardBox link key={board.id} {...board} />
        ))}
        <BoardBox>
          <AddBoard addNewBoard={addNewBoard} />
        </BoardBox>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: Object.values(state.boards)
  };
};

export default connect(
  mapStateToProps,
  { addNewBoard }
)(BoardList);
