import React from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";

function Navigation(props) {
  return (
    <>
      <nav className="header-nav">
        <Link to="/">
          <div className="header__logo" />
        </Link>
        <Link to="/movies" className="header-nav__movies">
          Фильмы
        </Link>
        <Link to="/movies" className="header-nav__saved-movies">
					Сохраненные фильмы
        </Link>
				{/* <Link to="/saved-movies" className="header-nav__saved-movies">
          Сохраненные фильмы
        </Link> */}
      </nav>
      <div className="header-auth">
        <Link to="/profile">
          <div className="header__profile" />
        </Link>
        <div className="header__menu" onClick={props.onClick}/>
      </div>
    </>
  );
}

export default Navigation;
