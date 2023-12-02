import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="section-line">
        <h2 className="section-line__text">О проекте</h2>
      </div>
      <div className="container">
      <div className="container__stages">
        <h3 className="container__title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="container__subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </div>
      <div className="container__stages">
        <h3 className="container__title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="container__subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      </div>
      <div className="timeline">
        <div className="timeline__stage">
          <p className="timeline__stage-text timeline__stage-text_type_green">1 неделя</p>
          <p className="timeline__stage-caption">Back-end</p>
        </div>
        <div className="timeline__stage">
          <p className="timeline__stage-text timeline__stage-text_type_gray">
            4 недели
          </p>
          <p className="timeline__stage-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
