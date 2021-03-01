import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-icon" />
        <form className="search-form__form" noValidate>
          <label className="search-form__field">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              minLength="2"
              maxLength="40"
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
