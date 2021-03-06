import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BoardBox.scss";

const propTypes = {
  title: PropTypes.string,
  color: PropTypes.string.isRequired
};

function renderBoardBox(title, color, children) {
  return (
    <div className={classNames("board-box", color + "-hover")}>
      <h2 className="board-box__text">{title}</h2>
      {children}
    </div>
  );
}

const BoardBox = ({ title, color, id, link, children }) => {
  return link ? (
    <Link style={{ color: "#FFF", textDecoration: "none" }} to={`/board/${id}`}>
      {renderBoardBox(title, color, children)}
    </Link>
  ) : (
    renderBoardBox(title, color, children)
  );
};

BoardBox.propTypes = propTypes;

export default BoardBox;
