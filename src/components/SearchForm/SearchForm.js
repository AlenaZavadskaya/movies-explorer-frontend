import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const [findedMovie, setFindedMovie] = useState("");
  function handleSearchMovie(e) {
    setFindedMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onGetMovies();
    setFindedMovie("");
  }

  return (
    <section className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <div className="search-form__search-icon" />
        <form className="search-form__form" noValidate>
          <label className="search-form__field">
            <input
              className="search-form__input"
              type="text"
              name="search"
              placeholder="Фильм"
              minLength="2"
              maxLength="40"
              value={findedMovie}
              onChange={handleSearchMovie}
              required
            />
          </label>
        </form>
        <button className="submit__button" type="submit"></button>
      </div>
    </section>
  );
}

export default SearchForm;
