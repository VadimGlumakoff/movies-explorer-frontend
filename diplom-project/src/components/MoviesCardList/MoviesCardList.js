import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";

import { useMediaQuery } from "@react-hook/media-query";
import {
  BIG_SCREEN,
  MIDDLE_SCREEN,
  SMALL_SCREEN,
  BIG_SCREEN_RENDER_MOVIES,
  MIDDLE_SCREEN_RENDER_MOVIES,
  SMALL_SCREEN_RENDER_MOVIES,
  isDesktopWidth,
  isTabletWidth,
} from "../../utils/config";

function MoviesCardList({ saveMovie, deleteMovie, films, isQueryIn }) {
  const isDesktop = useMediaQuery(isDesktopWidth);
  const isTablet = useMediaQuery(isTabletWidth);
  const initialMovieCount = isDesktop
    ? BIG_SCREEN_RENDER_MOVIES
    : isTablet
    ? MIDDLE_SCREEN_RENDER_MOVIES
    : SMALL_SCREEN_RENDER_MOVIES;

  const [visibleItemsCount, setVisibleItemsCount] = useState(initialMovieCount);

  const roundedVisibleMovieCount = visibleItemsCount;

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleItemsCount(visibleItemsCount + BIG_SCREEN);
    }

    if (isTablet) {
      return setVisibleItemsCount(visibleItemsCount + MIDDLE_SCREEN);
    }

    setVisibleItemsCount(visibleItemsCount + SMALL_SCREEN);
  };

  const classNameButton = () => {
    return roundedVisibleMovieCount >= films.length
      ? "movies-list__button-none"
      : "movies-list__button";
  };

  const handleClick = () => {
    calculateCardCount();
  };

  return (
    <div className="movies-list">
      {films.length === 0 && isQueryIn ? (
        <span className="movies__text">Ничего не найдено!</span>
      ) : (
        <ul className="movies-list__container">
          {films.slice(0, roundedVisibleMovieCount).map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie._id}
              deleteMovie={deleteMovie}
              saveMovie={saveMovie}
            />
          ))}
        </ul>
      )}

      <button className={classNameButton()} type="button" onClick={handleClick}>
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
