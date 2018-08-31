import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "../components/Board/Board";
import Start from "./Start/start";
import "./App.scss";

export class App extends Component {
  state = {
    rows: {
      1: { title: "Todo" },
      2: { title: "In Progress" },
      3: { title: "Done" }
    },
    boards: {
      1: {
        id: 1,
        title: "study",
        color: "red",
        rows: [1, 2, 3]
      },
      2: {
        id: 2,
        title: "",
        rows: []
      },
      3: {
        id: 3,
        title: "Dev stuff",
        color: "red",
        rows: []
      },
      4: {
        id: 4,
        title: "Youtube channel",
        color: "red",
        rows: []
      },
      5: {
        id: 5,
        title: "Other",
        color: "red",
        rows: []
      }
    }
  };

  getRows = boardId => {
    const rows = [];
    this.state.boards[boardId].rows.forEach(rowId => {
      rows.push(this.state.rows[rowId]);
    });

    return rows;
  };

  addBoard = title => {
    const newBoard = {
      id: new Date().getTime(),
      title
    };
    const boards = {
      ...this.state.boards,
      [newBoard.id]: newBoard
    };
    this.setState({
      boards
    });
    return newBoard;
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Start
                {...props}
                addBoard={this.addBoard}
                boards={Object.values(this.state.boards)}
              />
            )}
          />
          <Route
            path="/board/:boardId"
            render={props => {
              return (
                <Board
                  {...props}
                  {...this.state.boards[props.match.params.boardId]}
                  rows={this.getRows(props.match.params.boardId)}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
