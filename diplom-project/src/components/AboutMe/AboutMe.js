import photo from "../../images/photo.png";
import { Link } from "react-router-dom";
import "./AboutMe.css";


function AboutMe() {
  return (
    <section className="about-me">
      <div className="section-line section-line_type_student">
        <h2 className="section-line__text">Студент</h2>
      </div>
      <div className="about-me__container">
      <div className="section-about">
        <h3 className="section-about__name">Вадим</h3>
        <p className="section-about__title">Фронтенд-разработчик, 27 лет</p>
        <p className="section-about__subtitle">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <div className="section-about__nav">
        <Link className="section-about__link" target="_blank" to="https://github.com/VadimGlumakoff?tab=repositories">Github</Link>
        </div>
      </div>
      <img className="about-me__photo" src={photo} alt="Вадим"/>
      </div>
    </section>
  );
}

export default AboutMe;
