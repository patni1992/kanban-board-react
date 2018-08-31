import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Board.scss";

const propTypes = {
  title: PropTypes.string,
  color: PropTypes.string.isRequired
};

const Board = ({ title, color, children }) => {
  return (
    <div className={classNames("board", color)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Board.propTypes = propTypes;

export default Board;
