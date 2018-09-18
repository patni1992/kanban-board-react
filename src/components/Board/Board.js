import React, { Component } from "react";
import { connect } from "react-redux";
import ClickOutside from "../ClickOutside/ClickOutside";
import { addNewList } from "../../actions/lists";
import List from "../List/List";
import "./Board.scss";

class Board extends Component {
  state = {
    inputList: false
  };

  toggleInputList = () => {
    this.setState(prevState => ({
      inputList: !prevState.inputList,
      newList: ""
    }));
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addNewList({
      title: this.state.newList,
      boardId: this.props.id
    });
  };

  onChangeHandler = e => {
    this.setState({ newList: e.target.value });
  };

  render() {
    const { color, title } = this.props;

    return (
      <div>
        <section class={`board__info-bar ${color}`}>
          <h2 className="board__title">{title}</h2>
        </section>
        <section class={`board__lists-container ${color}`}>
          {this.props.lists.map(list => (
            <List color={color} {...list} />
          ))}
          {this.state.inputList ? (
            <ClickOutside handleClickOutside={this.toggleInputList}>
              <form
                className="board__add-list-form "
                onSubmit={this.onSubmitHandler}
              >
                <input
                  autoFocus
                  value={this.state.newList}
                  onChange={this.onChangeHandler}
                />
              </form>
            </ClickOutside>
          ) : (
            <button
              class={`board_add-list-btn  darken-${color}`}
              onClick={this.toggleInputList}
            >
              Add a list
            </button>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const board = state.boards[ownProps.match.params.boardId];
  const lists = board.lists.map(listId => state.lists[listId]);

  return {
    ...board,
    lists
  };
};

export default connect(
  mapStateToProps,
  { addNewList }
)(Board);
