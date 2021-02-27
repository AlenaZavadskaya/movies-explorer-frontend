import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import PopupMenu from "../PopupMenu/PopupMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
          <MoviesCard onMenu={handleMenu} />
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
