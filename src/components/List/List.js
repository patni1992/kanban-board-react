import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewCard } from "../../actions/cards";
import {deleteList} from "../../actions/lists"
import {Droppable, Draggable } from "react-beautiful-dnd";
import CardWrapper from "../Card/CardWrapper";
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

  delete = () => {
    const {id, cards, boardId, deleteList} = this.props;
    deleteList({id, cards,  boardId});
  }

  render() {
    const { color, title, cards, id, index, boardId } = this.props;
    return (
      <Draggable key={id + 1} index={index} draggableId={id + 1}>
        {(prov, { isDragging }) => (
         
          <div className="list__container "{...prov.draggableProps}
            ref={prov.innerRef}
            style={{
              ...prov.draggableProps.style
            }}>
            <h3  {...prov.dragHandleProps} class={`list__title darken-${color}`}>{title}   <i onClick={this.delete} class="fa fa-trash list__delete" /></h3>
            <Droppable droppableId={`${id}`}>
              {(provided, { isDraggingOver }) => (
                     
                  <div ref={provided.innerRef} class={`list darken-${color}`}>
                  
                    {cards &&
                      cards.map((card, index) => (
                        <Draggable key={card.id} index={index} draggableId={card.id}>
                          {(provided, { isDragging }) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              style={{
                                ...provided.draggableProps.style
                              }}
                            >
                              <CardWrapper {...card} />
                            </div>
                          )}
                        </Draggable>
                      ))}

                    {provided.placeholder}
                  </div>

                  
              )}
            </Droppable>
           
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
      </Draggable>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const list = state.lists[ownProps.id]
  let cards = [];
  if(list) {
    cards = list.cards.map(
      cardId => state.cards[cardId]
    );
  }

  return {
    cards
  };
};

export default connect(
  mapStateToProps,
  { addNewCard, deleteList }
)(List);
