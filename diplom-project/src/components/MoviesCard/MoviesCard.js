import "./MoviesCard.css";

function MoviesCard({ movie, saveMovie, deleteMovie }) {
  function countDuration(time) {
    if (time < 60) {
      return `${time}м`;
    }
    return `${Math.floor(time / 60)}ч 
${
  time - Math.floor(time / 60) * 60 !== 0
    ? time - Math.floor(time / 60) * 60 + "м"
    : ""
}`;
  }

  const handleLike = () => {
    saveMovie(movie);
  };

  const handleDelete = () => {
    deleteMovie(movie.id || movie.movieId);
  };

  return (
    <li className="card">
      <a target="_blank" rel="noreferrer" href={movie.trailerLink}>
        <img
          className="card__image"
          src={
            movie.status === "isDelete"
              ? movie.image
              : `https://api.nomoreparties.co/${movie.image.url}`
          }
          alt={`Обложка фильма: ${movie.nameRU}`}
        />
      </a>
      <div className="card__container">
        <h2 className="card__title">{movie.nameRU}</h2>
        <button
          className={
            movie.status === "isLiked"
              ? "card__button_active"
              : movie.status === "isNotLiked"
              ? "card__button"
              : "card__button_delete"
          }
          onClick={movie.status === "isNotLiked" ? handleLike : handleDelete}
          type="button"
        />
      </div>

      <p className="card__time">{countDuration(movie.duration)}</p>
    </li>
  );
}
export default MoviesCard;
