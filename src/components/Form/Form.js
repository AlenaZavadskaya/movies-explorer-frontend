import React from "react";
import { Link } from "react-router-dom";
import "../Form/Form.css";

function Form(props) {
  return (
    <section id={props.name}>
      <form className="form" id={props.id} onSubmit={props.onSubmit} noValidate>
        <Link to="/">
          <div className="header__logo" />
        </Link>
        <div className="form__container form__container_auth">
          <h2 className="form__heading">{props.title}</h2>
          <fieldset className="form__input-container">
            {props.children}
            <div className="form__handlers">
              <button className="submit__button-form" type="submit">
                {props.isLoading}
              </button>
            </div>
          </fieldset>
          {props.Link}
        </div>
      </form>
    </section>
  );
}

export default Form;
