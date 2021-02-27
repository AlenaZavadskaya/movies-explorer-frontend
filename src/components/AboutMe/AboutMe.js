import React from "react";
import Photo from "../../images/photo.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="about-me__section">Студент</h3>
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Елена</h2>
          <h4 className="about-me__profession">Фронтенд-разработчик, 28 лет</h4>
          <p className="about-me__background">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="about-me__links">
            <a className="about-me__link" href="https://www.facebook.com/profile.php?id=100015301717347">
              Facebook
            </a>
            <a className="about-me__link" href="https://github.com/AlenaZavadskaya">
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
