import logo from "../../images/logo.svg";
import React from "react";
import "./Register.css";
import { regexEmail } from "../../utils/config";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.userRegister(values);
  };

  return (
    <section className="register">
      <div className="register__container">
        <a href="/">
          <img className="logo" src={logo} alt="Логотип" />
        </a>
        <h1 className="title">Добро пожаловать!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__name">Имя</label>

          <input
            className="form__input"
            id="name"
            placeholder="Введите имя"
            required
            name="name"
            minLength="2"
            maxLength="30"
            type="text"
            value={values.name}
            onChange={handleChange}
          ></input>

          <span className="form__input_err">{errors.name}</span>

          <label className="form__name form__name_type_register">E-mail</label>

          <input
            className="form__input"
            required
            id="email"
            placeholder="Введите e-mail"
            minLength="2"
            maxLength="30"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
           pattern={regexEmail}
          ></input>

          <span className="form__input_err">{errors.email}</span>
          <label className="form__name form__name_type_register">Пароль</label>
          <input
            minLength="8"
            maxLength="30"
            className="form__input"
            required
            id="password"
            placeholder="Введите пароль"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          ></input>

          <span className="form__input_err">{errors.password}</span>
          <span className="form__error-message">{props.errorMessageEmail}</span>
          <button
            className={
              isValid
                ? "form__button button_type_register"
                : "form__button button_type_register-dsb"
            }
            disabled={!isValid}
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="subtitle subtitle_type_register">
          <p className="subtitle__text">Уже зарегистрированы?</p>
          <a className="subtitle__link" href="/signin">
            Войти
          </a>
        </div>
      </div>
    </section>
  );
}

export default Register;
