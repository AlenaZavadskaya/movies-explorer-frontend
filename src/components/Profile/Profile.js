import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Profile/Profile.css";
import Header from "../Header/Header";

function Profile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.onRegister(name, email);
  // }

  return (
    <>
      <Header className="header header__white">
        <nav className="header-nav">
          <Link to="/">
            <div className="header__logo" />
          </Link>
          <Link to="/movies" className="header-nav__movies">
            Фильмы
          </Link>
          <Link path="/saved-movies" className="header-nav__saved-movies">
            Сохраненные фильмы
          </Link>
        </nav>
        <div className="header-auth">
          <Link to="/profile">
            <div className="header__profile" />
					</Link>
					<div className="header__menu" onClick={props.onMenu} />
        </div>
      </Header>
      <section className="profile">
        <form
          className="form__profile"
          id="profile"
          onSubmit={props.onSubmit}
          noValidate
        >
          <div className="form__container_auth">
            <h2 className="form__heading-profile">Привет, Виталий!</h2>
            <fieldset className="form__inputs">
              <div className="form__input-container-profile">
                <label className="form__field-profile">
                  Имя
                  <input
                    id="profile-name"
                    className="form__item form__item-profile"
                    type="text"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    value={name}
                    onChange={handleChangeName}
                    required
                  />
                  <span id="name-input-error" className="form__item-error">
                    {props.message}
                  </span>
                </label>
              </div>
              <div className="form__input-container-profile">
                <label className="form__field-profile">
                  Почта
                  <input
                    id="profile-email"
                    className="form__item form__item-profile"
                    type="text"
                    placeholder="Почта"
                    minLength="2"
                    maxLength="40"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                  />
                  <span id="name-input-error" className="form__item-error">
                    {props.message}
                  </span>
                </label>
              </div>
              <div className="form__handlers">
                <button className="submit__button-profile" type="submit">
                  Редактировать
                </button>
              </div>
            </fieldset>
            <Link to="/sign-in" className="form__exit">
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
