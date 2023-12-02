import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <div className="section-line section-line_type_techs">
          <h2 className="section-line__text">Технологии</h2>
        </div>
        <div className="section-text">
          <h3 className="section-text__title">7 технологий</h3>
          <p className="section-text__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="cards">
          <li className="cards__item">HTML</li>
          <li className="cards__item">CSS</li>
          <li className="cards__item">JS</li>
          <li className="cards__item">React</li>
          <li className="cards__item">Git</li>
          <li className="cards__item">Express.js</li>
          <li className="cards__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
