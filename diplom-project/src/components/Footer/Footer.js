import "./Footer.css";
import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation().pathname;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div
          className={
            location === "/movies" || location === "/saved-movies"
              ? "footer__line footer__line_type_movies"
              : "footer__line"
          }
        >
          <p className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
        </div>
        <div
          className={
            location === "/movies" || location === "/saved-movies"
              ? "footer__subtitle footer__subtitle_type_movies"
              : "footer__subtitle"
          }
        >
          <p className="footer__date">&copy;2023</p>
          <ul className="footer__end">
            <li className="footer__item">
              <a
                className="footer__yandex"
                href="https://practicum.yandex.ru/"
                rel="noreferrer"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/VadimGlumakoff?tab=repositories"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
