import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "../Register/Register.css";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
  }

  return (
    <Form
      name="Register"
      id="form-register"
      title="Добро пожаловать!"
      isLoading={props.isLoading ? "Регистрация..." : "Зарегистрироваться"}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      Link={
        <Link to="/sign-in" className="form__request-auth">
          Уже зарегистрированны?
          <span className="form__request-span"> Войти</span>
        </Link>
      }
    >
      <label className="form__field form__field-text">
        Имя
        <input
          id="name-input"
          className="form__item"
          type="text"
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
      <label className="form__field form__field-text">
        E-mail
        <input
          id="email-input"
          className="form__item"
          type="text"
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
          className="form__item"
          type="password"
          minLength="8"
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
  );
}

export default Register;
