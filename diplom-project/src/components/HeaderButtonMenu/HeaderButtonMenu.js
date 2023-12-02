import { Link } from "react-router-dom";
import buttonIcon from "../../images/icon-header.svg";
import "./HeaderButtonMenu.css";
function HeaderButtonMenu() {
  return (
    <div className="button-menu">
      <Link className="button-menu__link" to="/profile">
        <p className="button-menu__text">Аккаунт</p>
        <img className="button-menu__icon" src={buttonIcon} alt="Иконка" />
      </Link>
    </div>
  );
}

export default HeaderButtonMenu;
