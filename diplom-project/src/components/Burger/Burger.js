import React from "react";
import { NavLink } from "react-router-dom";
import HeaderButtonMenu from "../HeaderButtonMenu/HeaderButtonMenu";
import Overlay from "../Overlay/Overlay";
import "./Burger.css";
function Burger({ openBurger, closeBurger }) {
  return (
    <Overlay openBurger={openBurger} closeBurger={closeBurger}>
    <section
      className={openBurger ? "burger burger_opened" : "burger"}
      onClick={closeBurger}
    >
      
      <div className="burger__container" onClick={(e) => e.stopPropagation()}>
      
        
      <button onClick={closeBurger} className="burger__close" type="button">
          
          </button>
        <nav className="burger__menu">
          <ul className="burger__list">
            <li className="burger__item">
              <NavLink
                onClick={closeBurger}
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "burger__link burger__link_active" : "burger__link"}`
                }
              >
                Главная
              </NavLink>
            </li>
            <li className="burger__item">
              <NavLink
                onClick={closeBurger}
                to="/movies"
                className={({ isActive }) =>
                  `${isActive ? "burger__link burger__link_active" : "burger__link"}`
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li className="burger__item">
              <NavLink
                onClick={closeBurger}
                to="/saved-movies"
                className={({ isActive }) =>
                  `${isActive ? "burger__link burger__link_active" : "burger__link"}`
                }
              >
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <div className="burger__account">
            <HeaderButtonMenu />
          </div>
        </nav>
        
      </div>
     
    </section>
   </Overlay>
  );
}

export default Burger;
