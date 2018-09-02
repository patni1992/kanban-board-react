import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import { withRouter } from "react-router-dom";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./AddBoard.scss";

class AddBoard extends Component {
  state = {
    hideOverlay: false,
    title: "",
    color: null
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
    const { color, title } = this.state;
    const newBoard = this.props.addBoard({ color, title });
    this.props.history.push(`/board/${newBoard.id}`);
  };

  setColor = color => {
    this.setState({
      color
    });
  };

  render() {
    return (
      <div className="add-board">
        <input
          type="text"
          placeholder="Add board title"
          onChange={this.handleChange}
          value={this.state.title}
          name=""
          id=""
          className="add-board__input"
        />
        <div className="add-board__cp-container">
          <ColorPicker
            clickHandler={this.setColor}
            colors={[
              "rgb(0, 121, 191)",
              "rgb(97, 189, 79)",
              "rgb(255, 171, 74)",
              "rgb(235, 90, 70)",
              "rgb(242, 214, 0)",
              "rgb(195, 119, 224)",
              "rgb(255, 128, 206)",
              "rgb(81, 232, 152)"
            ]}
          />
        </div>

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
