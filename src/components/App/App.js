import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./App.css";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import PopupMenu from "../PopupMenu/PopupMenu";
import * as moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [shortMovies, setShortMovies] = useState(false);
  const [message, setMessage] = useState("");
  const [moviesMessage, setMoviesMessage] = useState("");
  const history = useHistory();
  let location = useLocation();

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setMessage("");
          history.push("/sign-in");
        }
      })
      .catch((err) => {
        if (err === 409) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При регистрации пользователя произошла ошибка");
        }
      });
  }

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (!data) {
          setMessage("Что-то пошло не так");
          return false;
        }
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setMessage("");
          setLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
          return loggedIn;
        }
      })
      .catch((err) => {
        setMessage("При авторизации произошла ошибка");
        if (err === 401) {
          setMessage("Пользователь с таким email не найден");
        }
        if (err === 400) {
          setMessage("Неверный email или пароль");
        }
      });
  }

  function handleUpdateUser(data) {
    mainApi
      .editUserInfo(data)
      .then((editedData) => {
        setCurrentUser(editedData);
        setMessage("Данные профиля успешно обновлены");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        if (err.status === 409) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При изменении данных профиля произошла ошибка");
        }
      });
  }

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userMovies");
    localStorage.removeItem("movies");
    setUserMovies([]);
    setLoggedIn(false);
    setMessage("");
    history.push("/");
  };

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen();
  }

  function handleGetMovies(keyword) {
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = movies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      const checkedLikes = findedMovies.map((movie) => {
        movie.isSaved = userMovies.some(
          (userMovie) => userMovie.movieId === movie.id
        );
        return movie;
      });
      setSortedMovies(checkedLikes);
    }
  }

  function handleLikeClick(movie) {
    mainApi
      .addMovie(movie)
      .then((newMovie) => {
        if (!newMovie) {
          throw new Error("При добавлении фильма произошла ошибка");
        } else {
          setUserMovies([newMovie, ...userMovies]);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleLikeChange(movie) {
    const clickedMovie = movie.isSaved;
    if (clickedMovie) {
      handleMovieDelete(movie);
    } else {
      handleLikeClick(movie);
    }
  }

  function handleMovieDelete(movie) {
    const movieId = movie.id || movie.movieId;
    const selectedMovie = userMovies.find((item) => item.movieId === movieId);
    mainApi
      .deleteMovie(selectedMovie._id)
      .then((deletedMovie) => {
        if (!deletedMovie) {
          throw new Error("При удалении фильма произошла ошибка");
        } else {
          const newMoviesList = userMovies.filter((c) => c.movieId !== movieId);
          setUserMovies(newMoviesList);
        }
      })
      .catch((err) => console.log(`При удалении фильма: ${err}`));
  }

  function handleMovieDeleteButton(movie) {
    handleMovieDelete(movie);
  }

  function handleGetSavedMovies(keyword) {
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = userMovies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      setUserMovies(findedMovies);
    }
  }

  function handleCheckBox() {
    setShortMovies(!shortMovies);
  }

  function filterShortMovies(arr) {
    if (arr.length !== 0 || arr !== "undefind") {
      return arr.filter((movie) => (shortMovies ? movie.duration <= 40 : true));
    }
  }

  function getSavedMovies() {
    mainApi
      .getUserMovies()
      .then((savedMovies) => {
        const userData = JSON.parse(localStorage.getItem("currentUser"));
        const savedMoviesList = savedMovies.filter(
          (item) => item.owner._id === userData._id
        );
        setMoviesMessage("");
        localStorage.setItem("userMovies", JSON.stringify(savedMoviesList));
        setUserMovies(savedMoviesList);
        console.log(userMovies);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("userMovies");
        setMoviesMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }

  function getCurrentUser() {
    const jwt = localStorage.getItem("jwt");
    if (jwt === null) {
      return;
    }
    mainApi
      .getUserData(jwt)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          localStorage.setItem("currentUser", JSON.stringify(userData));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("jwt");
          history.push("/");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      getCurrentUser();
      getSavedMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    moviesApi
      .getInitialMovies()
      .then((allMovies) => {
        setMovies(allMovies);
        localStorage.setItem("movies", JSON.stringify(allMovies));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        localStorage.removeItem("movies");
      });
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          onMenu={handleMenu}
          movies={filterShortMovies(sortedMovies)}
          onGetMovies={handleGetMovies}
          loggedIn={loggedIn}
          onAddMovie={handleLikeChange}
          onFilter={handleCheckBox}
          isShortMovie={shortMovies}
          message={moviesMessage}
          savedMovies={userMovies}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          onMenu={handleMenu}
          movies={filterShortMovies(userMovies)}
          onGetMovies={handleGetSavedMovies}
          loggedIn={loggedIn}
          onDelete={handleMovieDeleteButton}
          isShortMovie={shortMovies}
          onFilter={handleCheckBox}
          message={moviesMessage}
          isSavedMovies={true}
        />
        <Route path="/sign-up">
          <Register onRegister={handleRegister} message={message} />
        </Route>
        <Route path="/sign-in">
          <Login onLogin={handleLogin} loggedIn={loggedIn} message={message} />
        </Route>
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onMenu={handleMenu}
          loggedIn={loggedIn}
          onSignOut={handleSignOut}
          onEditUser={handleUpdateUser}
          message={message}
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <PopupMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </CurrentUserContext.Provider>
  );
}

export default App;
