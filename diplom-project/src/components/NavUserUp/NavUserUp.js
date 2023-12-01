import { Link } from "react-router-dom";
import "./NavUserUp.css";

function NavUserUp() {
  return (
    <div className="nav-user-up">
      <Link to="/signup" className="nav-user-up__link">
        Регистрация
      </Link>

      <Link className="nav-user-up__button" to="/signin">
        Войти
      </Link>
    </div>
  );
}

export default NavUserUp;
