import { Link } from "react-router-dom";
import buttonIcon from "../../images/icon-header.svg";
import "./HeaderButtonMenuGreen.css";
function HeaderButtonMenuGreen() {
  return (
    <div className="button-menu-green">
      <Link className="button-menu-green__link" to="/profile">
        <span className="button-menu-green__text">Аккаунт</span>
        <img
          className="button-menu-green__icon"
          src={buttonIcon}
          alt="Иконка"
        />
      </Link>
    </div>
  );
}

export default HeaderButtonMenuGreen;
