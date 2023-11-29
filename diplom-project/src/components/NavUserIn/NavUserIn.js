import { NavLink, useLocation } from "react-router-dom";
import Burger from "../Burger/Burger";
import { useState, useEffect } from "react";
import "./NavUserIn.css";
import HeaderButtonMenu from "../HeaderButtonMenu/HeaderButtonMenu";
import HeaderButtonMenuGreen from "../HeaderButtonMenuGreen/HeaderButtonMenuGreen";
function NavUserIn() {
  const [openBurger, setOpenBurger] = useState(false);

  function closeBurger() {
    setOpenBurger(false);
  }

  useEffect(() => {
    function closeByEsc(evt) {
      if (evt.key === "Escape") {
        closeBurger();
      }
    }

    if (openBurger) {
      document.addEventListener("keydown", closeByEsc);
    }

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [openBurger]);

  const location = useLocation().pathname;

  return (
    <div className="nav-user-in">
      <Burger
        openBurger={openBurger}
        closeBurger={closeBurger}
        setOpenBurger={setOpenBurger}
      />
      <div className="nav-user-in__container">
        <NavLink
          to="/movies"
          className={
            location === "/profile" ||
            location === "/movies" ||
            location === "/saved-movies"
              ? "nav-user-in__link nav-user-in__link_type_profile"
              : "nav-user-in__link"
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={
            location === "/profile" ||
            location === "/movies" ||
            location === "/saved-movies"
              ? "nav-user-in__link nav-user-in__link_type_profile"
              : "nav-user-in__link"
          }
        >
          Сохраненные фильмы
        </NavLink>
      </div>

      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className={
          location === "/profile" ||
          location === "/movies" ||
          location === "/saved-movies"
            ? "nav-user-in__burger nav-user-in__burger_button-black"
            : "nav-user-in__burger"
        }
      ></button>

      <div className="nav-user-in__link-button">
        {location === "/profile" ||
        location === "/movies" ||
        location === "/saved-movies" ? (
          <HeaderButtonMenu />
        ) : (
          <HeaderButtonMenuGreen />
        )}
      </div>
    </div>
  );
}

export default NavUserIn;
