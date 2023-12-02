import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({
  setQueryMovies,
  setQuerySavedMovies,
  savedCheckbox,
  savedCheckboxClick,
  handleCheckboxFilms,
  checkboxClick,
  checkbox,
}) {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");

  const [errMessageSearch, setErrMessageSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (location.pathname === "/movies") {
      sessionStorage.setItem("inputValue", searchValue);
      setQueryMovies(searchValue);
    } else {
      setQuerySavedMovies(searchValue);
    }
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      const savedValue = sessionStorage.getItem("inputValue");

      setSearchValue(savedValue);
    }
  }, []);

  useEffect(() => {
    if (searchValue?.length === 0) {
      setErrMessageSearch("Поле не может быть пустым!");
    } else {
      setErrMessageSearch("");
    }
  }, [searchValue]);

  function handleChangeInput(e) {
    setSearchValue(e.target.value);
    if (searchValue >= 0) {
      setErrMessageSearch("");
    }
  }

  return (
    <div className="search-form">
      <form
        className="search-form__form"
        name="film"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search-form__container">
          <input
            name="film"
            className="search-form__input"
            placeholder="Фильм"
            type="text"
            maxLength="50"
            onChange={handleChangeInput}
            value={searchValue}
            required
          />
          {
            <button className="search-form__button" type="submit">
              Найти
            </button>
          }
        </div>
        <span className="input__error">{errMessageSearch}</span>

        <FilterCheckbox
          handleCheckboxFilms={handleCheckboxFilms}
          checkboxClick={checkboxClick}
          savedCheckboxClick={savedCheckboxClick}
          checkbox={checkbox}
          savedCheckbox={savedCheckbox}
        />
      </form>
    </div>
  );
}

export default SearchForm;
