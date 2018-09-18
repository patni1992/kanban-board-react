import React, { Component } from "react";
import ClickOutside from "../ClickOutside/ClickOutside";
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
    let { color, title } = this.state;
    color = color ? color : "blue";
    this.props.addNewBoard({ color, title });
    this.handleClickOutside();
    this.setState({
      title: "",
      color: null
    });
  };

  setColor = color => {
    this.setState({
      color
    });
  };

  render() {
    return (
      <ClickOutside handleClickOutside={this.handleClickOutside}>
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
              default="blue"
              colors={["blue", "orange", "green", "red"]}
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
      </ClickOutside>
    );
  }
}

export default withRouter(AddBoard);
