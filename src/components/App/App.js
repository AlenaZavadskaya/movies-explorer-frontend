import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  function handleGetMovies() {
    setIsLoading(true);
    moviesApi
      .getInitialMovies()
      .then((allMovies) => {
        setIsLoading(false);
        setMovies(allMovies);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen();
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push("/movies");
          } else {
            localStorage.removeItem("jwt");
          }
        })
        .catch((err) => {
          console.log(`Переданный токен некорректен или просрочен: ${err}`);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  function handleRegister(name, email, password) {
    debugger;
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          if (res) {
            // setMessage("");
            setIsLoading(false);
            history.push("/sign-in");
          }
        }
      })
      .catch((err) => {
        // setMessage("Ошибка при регистрации");
        if (err === 400) {
          return console.log(`Некорректно заполнено одно из полей : ${err}`);
        }
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleLogin(email, password) {
    debugger;
    setIsLoading(true);
    auth
      .authorize(email, password)
      .then((data) => {
        if (!data) {
          // setMessage("Что-то пошло не так.");
          return false;
        }
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoading(false);
          // setMessage("");
          setLoggedIn(true);
          history.push("/movies");
          return loggedIn;
        }
      })
      .catch((err) => {
        // setMessage("Ошибка при авторизации.");
        if (err === 401) {
          return console.log(`Пользователь с таким email не найден: ${err}`);
        }
        if (err === 400) {
          return console.log(`Не передано одно из полей: ${err}`);
        }
        console.log(`Ошибка: ${err}`);
      });
  }

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/sign-in");
  };

  React.useEffect(() => {
    Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
      .then(([userData, savedMovies]) => {
        setCurrentUser(userData);
        setUserMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          movies={movies}
          onGetMovies={handleGetMovies}
          isLoading={isLoading}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          onMenu={handleMenu}
          savedMovies={userMovies}
          onGetMovies={handleGetMovies}
          isLoading={isLoading}
          loggedIn={loggedIn}
        />
        <Route path="/sign-up">
          <Register onRegister={handleRegister} isLoading={isLoading} />
        </Route>
        <Route path="/sign-in">
          <Login
            onLogin={handleLogin}
            isLoading={isLoading}
            loggedIn={loggedIn}
          />
        </Route>
        <ProtectedRoute
          path="/profile"
          component={Profile}
          onMenu={handleMenu}
          loggedIn={loggedIn}
          onSignOut={handleSignOut}
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
