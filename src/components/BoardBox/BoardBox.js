import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./BoardBox.scss";

const propTypes = {
  title: PropTypes.string,
  color: PropTypes.string.isRequired
};

const BoardBox = ({ title, color, children }) => {
  return (
    <div className={classNames("board-box", color)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BoardBox.propTypes = propTypes;

export default BoardBox;
