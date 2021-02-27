import React from "react";
import "./MoviesCard.css";
import "../Header/Header.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import More from "../More/More";
import Footer from "../Footer/Footer";
import card_1 from "../../images/card-1.png";
import card_2 from "../../images/card-2.png";
import card_3 from "../../images/card-3.png";
import card_4 from "../../images/card-4.png";
import card_5 from "../../images/card-5.png";
import card_6 from "../../images/card-6.png";
import card_7 from "../../images/card-7.png";

function MoviesCard(props) {
  return (
    <>
      <Header className="header header__white">
        <Navigation onClick={props.onMenu} />
      </Header>
      <SearchForm />
      <FilterCheckbox />
      <section className="movies-card">
        <div className="card">
          <div className="card__description">
            <ul className="card__description-container">
              <li className="card__title">33 слова о дизайне</li>
              <li className="card__duration">1ч 42м</li>
            </ul>
            <div className="card__like" />
          </div>
          <img className="card__img" src={card_1} alt="" />
        </div>
        <div className="card">
          <div className="card__description">
            <ul className="card__description-container">
              <li className="card__title">Киноальманах «100 лет дизайна»</li>
              <li className="card__duration">1ч 42м</li>
            </ul>
          </div>
          <img className="card__img" src={card_2} alt="" />
        </div>
        <div className="card">
          <div className="card__description">
            <ul className="card__description-container">
              <li className="card__title">В погоне за Бенкси</li>
              <li className="card__duration">1ч 42м</li>
            </ul>
            <div className="card__like" />
          </div>
          <img className="card__img" src={card_3} alt="" />
        </div>
        <div className="card">
          <div className="card__description">
            <ul className="card__description-container">
              <li className="card__title">Баския: Взрыв реальности</li>
              <li className="card__duration">1ч 42м</li>
            </ul>
            <div className="card__like" />
          </div>
          <img className="card__img" src={card_4} alt="" />
        </div>
        <div className="card">
          <div className="card__description">
            <ul className="card__description-container">
              <li className="card__title">Бег это свобода</li>
              <li className="card__duration">1ч 42м</li>
            </ul>
          </div>
          <img className="card__img" src={card_5} alt="" />
        </div>
        <div className="card">
          <div className="card__description">
            <ul className="card__description-container">
              <li className="card__title">Книготорговцы</li>
              <li className="card__duration">1ч 42м</li>
            </ul>
            <div className="card__like" />
          </div>
          <img className="card__img" src={card_6} alt="" />
        </div>
        <div className="card">
          <div className="card__description">
            <ul className="card__description-container">
              <li className="card__title">Когда я думаю о Германии ночью</li>
              <li className="card__duration">1ч 42м</li>
            </ul>
            <div className="card__like" />
          </div>
          <img className="card__img" src={card_7} alt="" />
        </div>
      </section>
      <More />
      <Footer />
    </>
  );
}

export default MoviesCard;
