import React from "react";
import { Link } from "react-router-dom";
import "../Profile/Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header className="header header__white">
        <Navigation onClick={props.onMenu} />
      </Header>
      <section className="profile">
        <form
          className="form__profile"
          id="profile"
          onSubmit={props.onSubmit}
          noValidate
        >
          <div className="form__container_auth">
            <h2 className="form__heading-profile">{`Привет, ${currentUser.name}!`}</h2>
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
                    defaultValue={currentUser.name}
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
                    defaultValue={currentUser.email}
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
            <Link
              to="/sign-in"
              className="form__exit"
              onClick={props.onSignOut}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
