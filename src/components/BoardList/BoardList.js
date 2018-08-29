import React, { Component } from "react";
import Board from "../Board/Board";
import AddBoard from "../AddBoard/AddBoard";
import "./BoardList.scss";

const testProjects = [
  {
    title: "study"
  },
  {
    title: ""
  },
  {
    title: "Dev stuff"
  },
  {
    title: "Youtube chanel"
  },
  {
    title: "Other"
  }
];

class BoardList extends Component {
  render() {
    return (
      <div className="board-list">
        {testProjects.map(project => (
          <Board title={project.title} />
        ))}
        <Board>
          <AddBoard />
        </Board>
      </div>
    );
  }
}

export default BoardList;
