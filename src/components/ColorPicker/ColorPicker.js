import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ColorPicker.scss";

const propTypes = {
  colors: PropTypes.array.isRequired
};

class ColorPicker extends Component {
  state = {
    selected: null
  };
  clickHandler = e => {
    const color = e.currentTarget.getAttribute("data-color");
    this.setState({ selected: color });
    this.props.clickHandler(color);
  };
  render() {
    return (
      <div className="color-picker">
        {this.props.colors.map(color => (
          <div
            data-color={color}
            onClick={this.clickHandler}
            className={`color-picker__color color-picker__color--selected ${color}`}
          >
            {(this.state.selected === color ||
              (this.props.default === color && !this.state.selected)) && (
              <i
                className="fa fa-check color-picker__checker"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

ColorPicker.propTypes = propTypes;

export default ColorPicker;
