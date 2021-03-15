import React from "react";
import "../MoviesCard/MoviesCard.css";
import "../Header/Header.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "../FilterCheckbox/FilterCheckbox.css";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <>
      <Header className="header header__white">
        <Navigation onClick={props.onMenu} />
      </Header>
      <SearchForm onGetMovies={props.onGetMovies} />
      <FilterCheckbox
        onFilter={props.onFilter}
        isShortMovie={props.isShortMovie}
      />
      <MoviesCardList
        movies={props.movies}
        onGetMovies={props.handleGetMovies}
        onAddMovie={props.onAddMovie}
        isSavedMovies={false}
        message={props.message}
        savedMovies={props.savedMovies}
      />
      <Footer />
    </>
  );
}

export default Movies;
