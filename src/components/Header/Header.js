import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
const Header = props => {
  return (
    <header class={`header darken-${props.color}`}>
      <div class="header__menu">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <button class="header__btn">
            <i class="fa fa-trello header__btn-icon" />
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
