import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
const Header = props => {
  return (
    <header className={`header darken-${props.color}`}>
      <div className="header__menu">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <button className="header__btn">
            <i className="fa fa-trello header__btn-icon" />
            Boards
          </button>
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.match.params.boardId;
  const color = boardId ? state.boards[boardId].color : "black";

  return {
    color
  };
};

export default connect(mapStateToProps)(Header);
