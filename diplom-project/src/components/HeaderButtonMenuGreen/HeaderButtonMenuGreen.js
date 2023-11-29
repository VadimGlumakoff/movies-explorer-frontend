import buttonIcon from "../../images/icon-header.svg";
import "./HeaderButtonMenuGreen.css";
function HeaderButtonMenuGreen() {
  return (
    <div className="button-menu-green">
      <a className="button-menu-green__link" href="/profile">
        <span className="button-menu-green__text">Аккаунт</span>
        <img
          className="button-menu-green__icon"
          src={buttonIcon}
          alt="Иконка"
        />
      </a>
    </div>
  );
}

export default HeaderButtonMenuGreen;
