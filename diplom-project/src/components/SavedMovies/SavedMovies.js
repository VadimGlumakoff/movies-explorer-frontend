import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import { useState, useEffect } from "react";
function SavedMovies({ deleteMovie, savedMovies }) {
  const [query, setQuery] = useState("");
  const [checkbox, setcheckbox] = useState(false);
  function filteredSavedMovie() {
    if (!savedMovies) {
      return [];
    }

    let filteredSavedMovies = savedMovies;

    if (query) {
      filteredSavedMovies = filteredSavedMovies.filter(
        (movie) =>
          movie.nameRU
            .toLowerCase()
            .trim()
            .includes(query.toLowerCase().trim()) ||
          movie.nameEN.toLowerCase().trim().includes(query.toLowerCase().trim())
      );
    }

    if (checkbox) {
      filteredSavedMovies = filteredSavedMovies.filter((movie) => {
        return movie.duration <= 40;
      });
    }
    return filteredSavedMovies;
  }

  const savedFilms = filteredSavedMovie(savedMovies, query);

  useEffect(() => {
    const checkBox = sessionStorage.getItem("savedCheckbox");
    setcheckbox(Boolean(checkBox));
  }, []);

  const checkboxClick = () => {
    if (checkbox === false) {
      setcheckbox(true);
      sessionStorage.setItem("savedCheckbox", true);
    } else {
      setcheckbox(false);
      sessionStorage.removeItem("savedCheckbox");
    }
  };
  return (
    <section className="saved-movies">
      <SearchForm
        setQuerySavedMovies={setQuery}
        savedQuery={query}
        checkboxClick={checkboxClick}
        filteredSavedMovie={filteredSavedMovie}
        checkbox={checkbox}
      />

      <div className="movies-list">
        {savedFilms.length <= 0 ? (
          <span className="movies__text">Ничего не найдено!</span>
        ) : (
          <ul className="movies-list__container">
            {filteredSavedMovie().map((movie) => (
              <MoviesCard
                deleteMovie={deleteMovie}
                movie={movie}
                key={movie._id}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default SavedMovies;
