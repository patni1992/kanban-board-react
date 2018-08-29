import React from "react";
import PropTypes from "prop-types";
import "./Board.scss";

const propTypes = {
  title: PropTypes.string
};

const Board = ({ title, children }) => {
  return (
    <div className="board">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Board.propTypes = propTypes;

export default Board;
