import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
// import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies }) {
  return (
    <section className="movies-card-list">
      {/* <Preloader /> */}
      {movies.length === 0 && (
        <p className="movies-card-list__not-found">Ничего не найдено</p>
      )}
      {movies.length > 0 && (
        <ul className="movies-card-list__container">
          {movies.map((movie) => {
            return <MoviesCard key={movie.id} movie={movie} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;