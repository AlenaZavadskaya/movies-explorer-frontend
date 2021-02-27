import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="aboutProject">
      <h3 className="about__section">О проекте</h3>
      <div className="about-project">
        <div>
          <h4 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h4 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ul className="about-scale">
        <li className="about-scale__weeks about-scale_green">1 неделя</li>
        <li className="about-scale__weeks">4 недели</li>
        <li className="about-scale__dev">Back-end</li>
        <li className="about-scale__dev">Front-end</li>
      </ul>
    </section>
  );
}

export default AboutProject;
