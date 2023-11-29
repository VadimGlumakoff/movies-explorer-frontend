import imageWeb from "../../images/web.svg";

import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб<span>&#8209;</span>
            разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <div className="promo__text-button">
            <a href="#section-portfolio" className="promo__button">
              Узнать больше
            </a>
          </div>
        </div>

        <img className="promo__image" src={imageWeb} alt="Картинка Веб" />
      </div>
    </section>
  );
}

export default Promo;
