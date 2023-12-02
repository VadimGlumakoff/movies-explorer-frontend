import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";

import "./Movies.css";

function Movies({
  movies,
  saveMovie,
  deleteMovie,
  setMovies,
  handleChangeQuery,
  isQueryIn,
}) {
  const [query, setQuery] = useState("");

  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    const savedQuery = sessionStorage.getItem("inputValue");
    if (savedQuery) {
      setQuery(savedQuery);
    }
  }, []);

  function filteredMovie() {
    let filteredMovies = movies;

    if (query) {
      handleChangeQuery();
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.nameRU
            .toLowerCase()
            .trim()
            .includes(query.toLowerCase().trim()) ||
          movie.nameEN.toLowerCase().trim().includes(query.toLowerCase().trim())
      );
    }

    if (checkbox) {
      filteredMovies = filteredMovies.filter((movie) => {
        return movie.duration <= 40;
      });
    }
    sessionStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    return filteredMovies;
  }

  const films = filteredMovie(movies, query);

  const [localMovies, setLocalMovies] = useState([]);
  useEffect(() => {
    const filteredMovies = sessionStorage.getItem("filteredMovies");
    if (filteredMovies) {
      const filtered = JSON.parse(filteredMovies);

      setLocalMovies(filtered);
    }
  }, []);

  const checkboxClick = () => {
    if (checkbox === false) {
      setCheckbox(true);
      sessionStorage.setItem("checkbox", true);
    } else {
      setCheckbox(false);
      sessionStorage.removeItem("checkbox");
    }
  };

  useEffect(() => {
    const checkBox = sessionStorage.getItem("checkbox");
    setCheckbox(Boolean(checkBox));
  }, []);

  return (
    <section className="movies">
      <SearchForm
        setQueryMovies={setQuery}
        movies={movies}
        checkboxClick={checkboxClick}
        queryMovies={query}
        checkbox={checkbox}
      />
      {isQueryIn ? (
        <MoviesCardList
          isQueryIn={isQueryIn}
          setMovies={setMovies}
          saveMovie={saveMovie}
          films={films || localMovies}
          deleteMovie={deleteMovie}
          movies={movies}
          checkbox={checkbox}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Movies;
