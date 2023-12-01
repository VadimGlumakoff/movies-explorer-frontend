import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import CurrentUserContext from "../../context/context";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import * as auth from "../../utils/auth";
import api from "../../utils/MainApi";
import apiMovies from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const location = useLocation().pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [isUpdateUser, setIsUpdateUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    auth
      .checkToken()
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
  }, [isLoggedIn]);

  function userRegister({ email, password, name }) {
    setLoading(true);
    auth
      .register({ email, password, name })

      .then((res) => {
        if (res) {
          userLogin({ email, password });
        }
      })

      .catch((err) => {
        setErrorMessageEmail(
          "Пользователь с таким email уже существует или произошла ошибка!"
        );
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function userLogin({ email, password }) {
    setLoading(true);
    auth
      .authorization({ email, password })

      .then(() => {
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);

        setErrorMessageLogin("Неверный логин или пароль!");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const [isQueryIn, setIsQueryIn] = useState(false);

  function handleChangeQuery() {
    setIsQueryIn(true);
  }

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getInitialMovie(), apiMovies.getMovies()])
        .then((res) => {
          const movies = res[1];
          const savedMovies = res[0];
          const updateMovies = movies.map((movie, id) => {
            const savedMovie = savedMovies.find(
              (saved) => saved.movieId === movie.id
            );
            if (savedMovie) {
              return { ...movie, status: "isLiked", key: id };
            }
            return { ...movie, status: "isNotLiked", key: id };
          });
          const updateSavedMovies = savedMovies.map((movie, id) => {
            return { ...movie, status: "isDelete", key: id };
          });
          setSavedMovies(updateSavedMovies);
          setMovies(updateMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function saveMovie(movie) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,

      id,
      nameRU,
      nameEN,
    } = movie;
    api
      .saveMovie({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      })
      .then((movie) => {
        setMovies((prevState) =>
          prevState.map((el) => {
            return el.id === movie.movieId ? { ...el, status: "isLiked" } : el;
          })
        );
        movie.status = "isDelete";
        setSavedMovies((prevState) => [...prevState, movie]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteMovie(movieId) {
    setLoading(true);
    const removedMovie = savedMovies.find((el) => {
      return el.movieId === movieId ? el : "";
    });
    api
      .deleteMovie(removedMovie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c.movieId !== movieId));
        setMovies((prevState) =>
          prevState.map((el) => {
            return el.id === movieId ? { ...el, status: "isNotLiked" } : el;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function removeToken() {
    setLoading(true);
    auth
      .logout()
      .then((res) => {
        navigate("/");
        setIsLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateUser({ email, name }) {
    setLoading(true);
    api
      .editUserInfo({ email, name })
      .then(() => {
        setCurrentUser({ email, name });
        setMessage("Данные изменены!");
        setIsUpdateUser(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Произошла ошибка!");
        setIsUpdateUser(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {(location === "/" ||
          location === "/movies" ||
          location === "/saved-movies" ||
          location === "/profile") && <Header isLoggedIn={isLoggedIn} />}
        <main>
          <Routes>
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  savedMovies={savedMovies}
                  deleteMovie={deleteMovie}
                />
              }
            />

            <Route
              path="/movies"
              element={
                isLoggedIn ? (
                  <Movies
                    movies={movies}
                    setMovies={setMovies}
                    saveMovie={saveMovie}
                    deleteMovie={deleteMovie}
                    handleChangeQuery={handleChangeQuery}
                    isQueryIn={isQueryIn}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/signin"
              element={
                <Login
                  userLogin={userLogin}
                  errorMessageLogin={errorMessageLogin}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  userRegister={userRegister}
                  errorMessageEmail={errorMessageEmail}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  isUpdateUser={isUpdateUser}
                  message={message}
                  updateUser={updateUser}
                  removeToken={removeToken}
                  profileName={profileName}
                />
              }
            />
            <Route path="/" element={<Main />} />
          </Routes>
          <Preloader loading={loading} />
        </main>
        {(location === "/" ||
          location === "/movies" ||
          location === "/saved-movies") && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
