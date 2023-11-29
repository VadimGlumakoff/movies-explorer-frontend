import buttonIcon from "../../images/icon-header.svg";
import "./HeaderButtonMenu.css";
function HeaderButtonMenu() {
  return (
    <div className="button-menu">
      <a className="button-menu__link" href="/profile">
        <p className="button-menu__text">Аккаунт</p>
        <img className="button-menu__icon" src={buttonIcon} alt="Иконка" />
      </a>
    </div>
  );
}

export default HeaderButtonMenu;
