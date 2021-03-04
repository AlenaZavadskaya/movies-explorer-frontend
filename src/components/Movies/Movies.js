import React from "react";
import "../MoviesCard/MoviesCard.css";
import "../Header/Header.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import More from "../More/More";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <>
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
    </>
  );
}

export default Movies;
