import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__section">Портфолио</h3>
      <div className="portfolio__links portfolio__links_border">
        <a
          className="portfolio__link"
          href="https://alenazavadskaya.github.io/how-to-learn/index.html"
        >
          Статичный сайт
        </a>
        <div className="portfolio__link-icon" />
      </div>
      <div className="portfolio__links portfolio__links_border">
        <a
          className="portfolio__link"
          href="https://alenazavadskaya.github.io/russian-travel/index.html"
        >
          Адаптивный сайт
        </a>
        <div className="portfolio__link-icon" />
      </div>
      <div className="portfolio__links">
        <a
          className="portfolio__link"
          href="https://alenazavadskaya.github.io/mesto/index.html"
        >
          Одностраничное приложение
        </a>
        <div className="portfolio__link-icon" />
      </div>
    </section>
  );
}

export default Portfolio;
