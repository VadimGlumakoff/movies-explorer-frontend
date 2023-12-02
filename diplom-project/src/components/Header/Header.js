import logo from "../../images/logo.svg";
import React from "react";
import NavUserIn from "../NavUserIn/NavUserIn";
import NavUserUp from "../NavUserUp/NavUserUp";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
function Header({ isLoggedIn }) {
  const location = useLocation().pathname;

  const homeClass = `header__home ${
    isLoggedIn ? "header__home_type_login" : ""
  }`;
  const headerNavClass = `header__nav ${
    isLoggedIn ? "header__nav_type_login" : ""
  }`;

  return (
    <header
      className={
        location === "/profile" ||
        location === "/movies" ||
        location === "/saved-movies"
          ? "header header_type_profile"
          : "header"
      }
    >
      <div className="header__container">
        <Link className={homeClass} to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <nav className={headerNavClass}>
          {!isLoggedIn && <NavUserUp />}
          {isLoggedIn && <NavUserIn />}
        </nav>
      </div>
    </header>
  );
}

export default Header;
