import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "../MoviesCard/MoviesCard.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  return (
    <section className="movies-card">
      {props.isLoading ? (
        <Preloader />
      ) : (
        props.movies.map((movie, id) => (
          <MoviesCard
            debugger
            movie={movie}
            name={movie.nameRU}
            duration={movie.duration}
            key={id}
            id={movie._id}
            {...movie}
          />
        ))
      )}
    </section>
  );
}

export default MoviesCardList;
