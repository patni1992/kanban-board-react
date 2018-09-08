import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = props => {
  return (
    <header class={`header darken-${props.color}`}>
      <div class="header__menu">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <button class="header__btn btn">
            <i class="fa fa-trello header__btn-icon" />
            Boards
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
