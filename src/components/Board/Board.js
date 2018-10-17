import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import ClickOutside from "../ClickOutside/ClickOutside";
import { addNewList, moveCard } from "../../actions/lists";
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

  handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    this.props.moveCard({
      source: { id: source.droppableId, index: source.index },
      destination: { id: destination.droppableId, index: destination.index }
    });
  };


  render() {
    const { color, title, id } = this.props;

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Droppable
          droppableId={id}
          type="COLUMN"
          direction="horizontal"
        >
          {provided => (
            <div  onMouseDown={this.handleMouseDown}
            onWheel={this.handleWheel} class={`board__container ${color}`} ref={provided.innerRef}>
              <section  class={`board__info-bar`}>
                <h2 className="board__title">{title}</h2>
              </section>
              <section class={`board__lists-container  ${color}`}>
                {this.props.lists.map((list, index) => (
                  <List color={color} index={index} {...list} />
                ))}
                {this.state.inputList ? (
                  <ClickOutside   handleClickOutside={this.toggleInputList}>
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
                {provided.placeholder}
              </section>

            </div>

          )}
        </Droppable>

      </DragDropContext>
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
  { addNewList, moveCard }
)(Board);
