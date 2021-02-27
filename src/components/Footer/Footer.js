import React from "react";
import "./Footer.css";

function Footer() {
	const date = new Date();

  return (
    <footer className="footer">
      <p className="footer__section">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copyright">&copy; {date.getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a className="footer__link" href="https://github.com/AlenaZavadskaya">Github</a>
          </li>
          <li className="footer__link">
            <a className="footer__link" href="https://www.facebook.com/profile.php?id=100015301717347">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
