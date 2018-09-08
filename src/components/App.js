import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import Start from "./Start/start";
import "./App.scss";

export class App extends Component {
  state = {
    rows: {
      1: {
        title: "Todo",
        cards: [
          {
            title:
              "Integer rutrum magna eu tempor fringilla. Donec ultricies a quam at consectetur. Fusce tempus diam lectus, in posuere elit tincidunt vel. Pellentesque convallis rutrum elementum. In laoreet nibh in aliquet porttitor. Duis gravida elit leo, eu blandit turpis dapibus eu. Suspendisse sit amet odio quam. Donec sit amet mi et ligula consequat ornare eget at velit. Quisque facilisis eleifend euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et urna nec nibh ultrices gravida vitae vel sapien. Vestibulum ultricies vel ante et molestie.",
            color: "red"
          },
          { title: "sleep", color: "red" }
        ]
      },
      2: {
        title: "In Progress"
      },
      3: {
        title: "Done",
        cards: [
          { title: "play dota", color: "red" },
          { title: "sleep", color: "red" }
        ]
      },
      4: {
        title: "Todo",
        cards: [
          {
            title:
              "Integer rutrum magna eu tempor fringilla. Donec ultricies a quam at consectetur. Fusce tempus diam lectus, in posuere elit tincidunt vel. Pellentesque convallis rutrum elementum. In laoreet nibh in aliquet porttitor. Duis gravida elit leo, eu blandit turpis dapibus eu. Suspendisse sit amet odio quam. Donec sit amet mi et ligula consequat ornare eget at velit. Quisque facilisis eleifend euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et urna nec nibh ultrices gravida vitae vel sapien. Vestibulum ultricies vel ante et molestie.",
            color: "green"
          },
          { title: "sleep", color: "orange" }
        ]
      },
      5: {
        title: "In Progress"
      },
      6: {
        title: "Done",
        cards: [
          { title: "buy books", color: "red" },
          { title: "sleep", color: "blue" }
        ]
      }
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
        title: "test",
        color: "orange",
        rows: [4, 5, 6]
      },
      3: {
        id: 3,
        title: "Dev stuff",
        color: "blue",
        rows: []
      },
      4: {
        id: 4,
        title: "Youtube channel",
        color: "green",
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

  addBoard = board => {
    const newBoard = {
      id: new Date().getTime(),
      rows: [],
      ...board
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
            path="/:board?/:boardId?"
            render={props => {
              console.log(props.match.params.boardId);
              return (
                <Header
                  color={
                    props.match.params.boardId
                      ? this.state.boards[props.match.params.boardId].color
                      : "black"
                  }
                />
              );
            }}
          />
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
              const rows = this.getRows(props.match.params.boardId);
              return (
                <Board
                  {...props}
                  {...this.state.boards[props.match.params.boardId]}
                  rows={rows}
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
