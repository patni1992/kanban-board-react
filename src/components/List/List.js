import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewCard } from "../../actions/cards";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../Card/Card";
import ClickOutside from "../ClickOutside/ClickOutside";
import "./List.scss";

class List extends Component {
  state = {
    addCard: false,
    newCardText: ""
  };

  toggleAddCard = () => {
    this.setState(prevState => ({
      addCard: !prevState.addCard
    }));
  };

  onKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey && this.state.newCardText) {
      e.preventDefault();
      console.log("submit");
      this.props.addNewCard({
        title: this.state.newCardText,
        listId: this.props.id
      });
    }
  };

  onChange = e => {
    this.setState({ newCardText: e.target.value });
  };

  render() {
    const { color, title, cards, id } = this.props;
    return (
      <div className="list__container">
        <h3 class={`list__title darken-${color}`}>{title}</h3>
        <Droppable droppableId={`${id}`}>
          {(provided, { isDraggingOver }) => (
            <div ref={provided.innerRef} style={{ height: "100%" }}>
              <div class={`list darken-${color}`}>
                <div class="list__items">
                  {cards &&
                    cards.map((card, index) => (
                      <Draggable
                        key={card.id}
                        index={index}
                        draggableId={card.id}
                      >
                        {(provided, { isDragging }) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              ...provided.draggableProps.style
                            }}
                          >
                            <Card {...card} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              </div>
              {this.state.addCard ? (
                <ClickOutside handleClickOutside={this.toggleAddCard}>
                  <textarea
                    onKeyDown={this.onKeyDown}
                    placeholder="Add a new card"
                    className="add-card"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.newCardText}
                  />
                </ClickOutside>
              ) : (
                <span onClick={this.toggleAddCard} class="list__add-card-btn">
                  + Add a card
                </span>
              )}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const cards = state.lists[ownProps.id].cards.map(
    cardId => state.cards[cardId]
  );

  return {
    cards
  };
};

export default connect(
  mapStateToProps,
  { addNewCard }
)(List);
