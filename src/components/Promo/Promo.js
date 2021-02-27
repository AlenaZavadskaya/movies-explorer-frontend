import React from "react";
import "./Promo.css";
import Logo from "../../images/promo-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button">Узнать больше</button>
      </div>
      <img className="promo__logo" src={Logo} alt="лого" />
    </section>
  );
}

export default Promo;
