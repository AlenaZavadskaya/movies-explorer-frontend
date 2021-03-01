import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "../MoviesCard/MoviesCard.css";
import "../Header/Header.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import More from "../More/More";
import Footer from "../Footer/Footer";

function MoviesCardList(props) {
  return (
    <>
      <Header className="header header__white">
        <Navigation onClick={props.onMenu} />
      </Header>
      <SearchForm />
      <FilterCheckbox />
      <section className="movies-card">
        {props.movies.map((movie, id) => (
          <MoviesCard
            debugger
            movie={movie}
            name={movie.nameRU}
            duration={movie.duration}
            key={id}
            id={movie._id}
            {...movie}
          />
        ))}
      </section>
      <More />
      <Footer />
    </>
  );
}

export default MoviesCardList;
