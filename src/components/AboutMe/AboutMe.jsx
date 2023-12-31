import "./AboutMe.css";
import avatar from "./../../images/aboutMe/Nick.jpg";

function AboutMe() {
  const birthYear = 2000;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <section id={"aboutMe"} className="aboutMe">
      <h2 className="aboutMe__title">Программист</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__container-life">
          <h3 className="aboutMe__name">Никита</h3>
          <p className="aboutMe__profession">Frontend Developer, {age} года</p>
          <p className="aboutMe__text">
            Я родился в Москве, живу в Европе, в Черногории, закончил ГУУ
            (Государственный университет управления), Факультет Международного
            бизнеса. После окончания учёбы работал менеджером по недвижимости в
            компании ZIP Realty.
          </p>
          <div className="aboutMe__container-link">
            <a
              href="https://github.com/PrettyLolli137"
              title="GitHub"
              className="aboutMe__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://t.me/lollisama"
              title="Telegram"
              className="aboutMe__link"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://www.instagram.com/lolllisama/"
              title="Inst"
              className="aboutMe__link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <img className="aboutMe__image" alt="Фото студента" src={avatar}></img>
      </div>
    </section>
  );
}
export default AboutMe;
