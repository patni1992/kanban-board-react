import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import "./AddBoard.scss";

class AddBoard extends Component {
  state = {
    hideOverlay: false
  };

  handleClickOutside = () => {
    if (this.state.hideOverlay) {
      this.toggleOverlay();
    }
  };

  toggleOverlay = () =>
    this.setState(prevState => ({
      hideOverlay: !prevState.hideOverlay
    }));

  render() {
    return (
      <div className="add-board">
        <input type="text" name="" id="" className="add-board__input" />
        <button className="add-board__submit">Create</button>
        <div
          onClick={this.toggleOverlay}
          style={{ display: this.state.hideOverlay ? "none" : "block" }}
          className="add-board__overlay"
        >
          <h2 className="add-board__overlay__text">Create new board</h2>
        </div>
      </div>
    );
  }
}

export default onClickOutside(AddBoard);
