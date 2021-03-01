import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import PopupMenu from "../PopupMenu/PopupMenu";
import * as MoviesApi from "../../utils/MoviesApi";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Promise.all([/*api.getUserData(),*/ MoviesApi.getInitialMovies()])
      .then(([initialMovies]) => {
        console.log("1", initialMovies);
        // console.log("2", initialMovies.image.url)
        setMovies(initialMovies);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);
  //     .then(([userData, initialCards]) => {
  //       setCurrentUser({
  //         name: userData.name,
  //         about: userData.about,
  //         avatar: userData.avatar,
  //         _id: userData._id,
  //       });
  //       setCards(initialCards);
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка: ${err}`);
  //     });
  //   // eslint-disable-next-line
  // }, [loggedIn]);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen();
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <MoviesCardList onMenu={handleMenu} movies={movies} />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile onMenu={handleMenu} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <PopupMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default App;
