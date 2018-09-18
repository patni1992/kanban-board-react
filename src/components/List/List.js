import React, { Component } from "react";
import { connect } from "react-redux";
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
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("submit");
    }
  };

  onChange = e => {
    this.setState({ newCardText: e.target.value });
  };

  render() {
    const { color, title, cards } = this.props;
    return (
      <div class={`list darken-${color}`}>
        <h3 class="list__title">{title}</h3>
        <ul class="list__items">
          {cards && cards.map(card => <Card {...card} />)}
        </ul>
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

export default connect(mapStateToProps)(List);
