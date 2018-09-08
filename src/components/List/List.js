import React, { Component } from "react";
import Card from "../Card/Card";
import ClickOutside from "../ClickOutside/ClickOutside";

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
        <h3 class="list-title">{title}</h3>
        <ul class="list-items">
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
          <span onClick={this.toggleAddCard} class="add-card-btn btn">
            + Add a card
          </span>
        )}
      </div>
    );
  }
}

export default List;
