import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // function handleMenu() {
  //   setIsMenuOpen(!isMenuOpen);
  // }

  // function closeMenu() {
  //   setIsMenuOpen();
  // }

  return (
    <header className={props.className}>
      {props.children}
      {/* <nav className={`header-nav ${!isMenuOpen}`}>
        <Link to="/">
          <div className="header__logo" />
        </Link>
        <Link to="/movies" className="header-nav__movies">
          Фильмы
        </Link>
        <Link path="/saved-movies" className="header-nav__saved-movies">
          Сохраненные фильмы
        </Link>
      </nav>
      <div className="header-auth">
        <Link to="/profile">
          <div className="header__profile" />
        </Link>
        <div className="header__menu" />
      </div> */}
    </header>
  );
}

export default Header;
