import "./NavUserUp.css";

function NavUserUp() {
  return (
    <div className="nav-user-up">
      <a href="/signup" className="nav-user-up__link">
        Регистрация
      </a>

      <a className="nav-user-up__button" href="/signin">
        Войти
      </a>
    </div>
  );
}

export default NavUserUp;
