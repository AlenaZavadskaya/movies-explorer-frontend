import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import More from "../More/More";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <Header className="header header__white">
        <Navigation onClick={props.onMenu} />
      </Header>
      <SearchForm onGetMovies={props.onGetMovies} />
      <FilterCheckbox />
      <MoviesCardList
        movies={props.movies}
        onGetMovies={props.handleGetMovies}
        isLoading={props.isLoading}
      />
      <More />
      <Footer />
    </section>
  );
}

export default SavedMovies;
