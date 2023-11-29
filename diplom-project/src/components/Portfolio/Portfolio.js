import strelka from "../../images/strelka.svg";
import "./Portfolio.css";
function Portfolio() {
  return (
    <section className="portfolio" id="section-portfolio">
      <div className="projects">
        <h3 className="projects__title">Портфолио</h3>
        <ul className="projects__container">
          <li className="projects__static">
            <a
              href="https://github.com/VadimGlumakoff/russian-travel"
              className="projects__link"
              rel="noreferrer"
              target="_blank"
            >
              <p className="projects__site">Статичный сайт</p>

              <img className="projects__image" alt="стрелка" src={strelka} />
            </a>
          </li>

          <li className="projects__static">
            <a
              href="https://github.com/VadimGlumakoff/russian-travel"
              className="projects__link"
              rel="noreferrer"
              target="_blank"
            >
              <p className="projects__site">Адаптивный сайт</p>

              <img className="projects__image" alt="стрелка" src={strelka} />
            </a>
          </li>

          <li className="projects__static">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/VadimGlumakoff/react-mesto-api-full-gha"
              className="projects__link"
            >
              <p className="projects__site">Одностраничное приложение</p>

              <img className="projects__image" alt="стрелка" src={strelka} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
