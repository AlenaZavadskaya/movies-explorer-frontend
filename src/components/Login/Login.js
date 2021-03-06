import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "../Login/Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    props.onLogin(email, password);
  }

  useEffect(() => {
    if (props.loggedIn) {
      setEmail("");
      setPassword("");
    }
  }, [props.loggedIn]);

  return (
    <>
      <Form
        name="Enter"
        id="form-enter"
        title="Рады видеть!"
        isLoading={props.isLoading ? "Вход..." : "Войти"}
        // isOpen={props.isOpen}
        onSubmit={handleSubmit}
        Link={
          <Link to="/sign-up" className="form__request-auth">
            Ещё не зарегистрированы?
            <span className="form__request-span"> Регистрация</span>
          </Link>
        }
      >
        <label className="form__field form__field-text">
          E-mail
          <input
            id="email-input"
            className="form__item"
            type="email"
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
        <label className="form__field form__field-text">
          Пароль
          <input
            id="password-input"
            className="form__item form__item_auth"
            type="password"
            minLength="2"
            maxLength="200"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <span id="about-input-error" className="form__item-error">
            {props.message}
          </span>
        </label>
      </Form>
    </>
  );
}

export default Login;
