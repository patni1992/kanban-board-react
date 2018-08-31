import React, { Component } from "react";
import Board from "../Board/Board";
import AddBoard from "../AddBoard/AddBoard";
import "./BoardList.scss";

const testProjects = [
  {
    title: "study",
    color: "red"
  },
  {
    title: ""
  },
  {
    title: "Dev stuff",
    color: "red"
  },
  {
    title: "Youtube chanel",
    color: "red"
  },
  {
    title: "Other",
    color: "red"
  }
];

class BoardList extends Component {
  render() {
    return (
      <div className="board-list">
        {testProjects.map(project => (
          <Board {...project} />
        ))}
        <Board>
          <AddBoard />
        </Board>
      </div>
    );
  }
}

export default BoardList;
