import React, { Component } from "react";
import "./AddBoard.scss";

class AddBoard extends Component {
  state = {
    hideOverlay: false
  };

  toggleOverlay = () =>
    this.setState(prevState => ({
      hideOverlay: !prevState.hideOverlay
    }));

  render() {
    return (
      <div className="add-board">
        <input type="text" name="" id="" />
        <button>Create</button>
        <div
          onClick={this.toggleOverlay}
          style={{ display: this.state.hideOverlay ? "none" : "block" }}
          className="add-board__overlay"
        >
          <h2 className="add-board__overlay__text">Click me</h2>
        </div>
      </div>
    );
  }
}

export default AddBoard;
