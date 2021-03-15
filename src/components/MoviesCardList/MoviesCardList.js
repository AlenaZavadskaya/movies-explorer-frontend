import React, { Suspense } from "react";
import "../MoviesCard/MoviesCard.css";
import Preloader from "../Preloader/Preloader";
import "../More/More.css";
const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard")); // Ленивая загрузка

function MoviesCardList(props) {
  debugger;
  const [counter, setCounter] = React.useState(4);

  function showMoreMovies() {
    setCounter(counter + 4);
  }
  return (
    <>
      <section className="movies-card">
        <Suspense fallback={<Preloader />}>
          {props.message
            ? props.message
            : props.movies
                .slice(0, counter)
                .map((movie, id) => (
                  <MoviesCard
                    movie={movie}
                    name={movie.nameRU}
                    duration={movie.duration}
                    key={id}
                    id={movie._id}
                    {...movie}
                    isSavedMovies={props.isSavedMovies}
                    onAddMovie={props.onAddMovie}
                    onDelete={props.onDelete}
                    savedMovies={props.savedMovies}
                  />
                ))}
        </Suspense>
      </section>
      {props.movies.length >= 4 &&
      props.movies.length > counter &&
      props.movies.length <= 100 &&
      !props.message ? (
        <section className="more">
          <button
            type="button"
            onClick={showMoreMovies}
            className="more__button"
          >
            Ещё
          </button>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
