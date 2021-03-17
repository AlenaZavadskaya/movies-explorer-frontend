import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <>
      {props.loggedIn ? (
        <Header className="header">
          <Navigation onClick={props.onMenu} />
        </Header>
      ) : (
        <Header className="header">
          <div className="header-nav">
            <Link to="/">
              <div className="header__logo" />
            </Link>
          </div>
          <div className="header-auth">
            <Link to="/sign-up" className="header-auth__register">
              Регистрация
            </Link>
            <Link to="/sign-in">
              <button className="header-auth__button">Войти</button>
            </Link>
          </div>
        </Header>
      )}
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
