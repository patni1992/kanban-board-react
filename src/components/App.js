import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "../components/Board/Board";
import Start from "./Start/start";
import "./App.scss";

export class App extends Component {
  state = {
    boards: {
      1: {
        id: 1,
        title: "study",
        color: "red"
      },
      2: {
        id: 2,
        title: ""
      },
      3: {
        id: 3,
        title: "Dev stuff",
        color: "red"
      },
      4: {
        id: 4,
        title: "Youtube chanel",
        color: "red"
      },
      5: {
        id: 5,
        title: "Other",
        color: "red"
      }
    }
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
