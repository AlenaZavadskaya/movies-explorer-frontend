import React from "react";
import Photo from "../../images/photo.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="about-me__section">Студент</h3>
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Елена</h2>
          <h4 className="about-me__profession">Веб-разработчик, 28 лет</h4>
          <p className="about-me__background">
            Я родилась и живу в Минске, закончила юридический факультет БИП.
            <br />
            После нескольких лет работы по специальности друзья вдохновили меня
            на изучение веб-разработки.
            <br />
            Так я прошла обучение в Яндекс.Практикум и хочу дальше развиваться в
            этом направлении.
          </p>
          <div className="about-me__links">
            <a
              className="about-me__link"
              href="https://www.linkedin.com/in/alena-z-5aa9b1195/"
            >
              LinkedIn
            </a>
            <a
              className="about-me__link"
              href="https://github.com/AlenaZavadskaya"
            >
              Github
            </a>
          </div>
        </div>
        <img className="about-me__photo" src={Photo} alt="аватар" />
      </div>
    </section>
  );
}

export default AboutMe;
