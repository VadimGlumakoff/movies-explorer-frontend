import logo from "../../images/logo.svg";
import "./Login.css";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { Link } from "react-router-dom";
import { regexEmail } from "../../utils/config";

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.userLogin(values);
  };

 

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="title">Рады видеть!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__name">E-mail</label>

          <input
            value={values.email}
            onChange={handleChange}
            name="email"
            minLength="8"
            maxLength="30"
            type="email"
            className="form__input"
            placeholder="Введите e-mail"
            required
            pattern={regexEmail}
          ></input>
          <span className="form__input_err">{errors.email}</span>
          <label className="form__name">Пароль</label>
          <input
            value={values.password}
            onChange={handleChange}
            name="password"
            required
            className="form__input"
            id="password"
            minLength="8"
            maxLength="30"
            placeholder="Введите пароль"
            type="password"
          ></input>
          <span className="form__input_err">{errors.password}</span>
          <span className="form__error-message">{props.errorMessageLogin}</span>
          <button
            className={
              isValid ? "form__button" : "form__button button_type_register-dsb"
            }
            disabled={!isValid}
            type="submit"
          >
            Войти
          </button>
        </form>
        <div className="subtitle">
          <p className="subtitle__text">Еще не зарегистрированы?</p>
          <Link className="subtitle__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
