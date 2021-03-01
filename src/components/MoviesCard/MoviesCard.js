import React from "react";
import "./MoviesCard.css";
import "../Header/Header.css";
const baseUrl = "https://api.nomoreparties.co";

function MoviesCard(props) {
  return (
    <div className="card">
      <div className="card__description">
        <ul className="card__description-container">
          <li className="card__title">{props.name}</li>
          <li className="card__duration">{props.duration}</li>
        </ul>
        <div className="card__like" />
      </div>
      <img
        className="card__img"
        src={`${baseUrl}${props.movie.image ? props.movie.image.url : ""}`}
        alt={props.name}
      />
    </div>
  );
}

export default MoviesCard;
