import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import "./AddBoard.scss";
import { withRouter } from "react-router-dom";

class AddBoard extends Component {
  state = {
    hideOverlay: false,
    title: ""
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

  handleChange = event => this.setState({ title: event.target.value });

  handleClick = () => {
    const newBoard = this.props.addBoard(this.state.title);
    this.props.history.push(`/board/${newBoard.id}`);
  };

  render() {
    return (
      <div className="add-board">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
          name=""
          id=""
          className="add-board__input"
        />
        <button
          onClick={this.handleClick}
          disabled={this.state.title === ""}
          className="add-board__submit"
        >
          Create
        </button>
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

export default withRouter(onClickOutside(AddBoard));
