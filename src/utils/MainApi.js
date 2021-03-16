class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserData() {
    if (this._headers.authorization !== "Bearer null") {
      return fetch(`${this._url}${"users"}/${"me"}`, {
        method: "GET",
        headers: this._headers,
      }).then(this._getResponse);
    }
  }

  editUserInfo(newData) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: newData.name,
        email: newData.email,
      }),
    }).then(this._getResponse);
  }

  getUserMovies() {
    const token = localStorage.getItem("jwt");
    if (token !== "Bearer null") {
      return fetch(`${this._url}${"movies"}`, {
        method: "GET",
        headers: this._headers,
      }).then(this._getResponse);
    }
  }

  addMovie(movie) {
    return fetch(`${this._url}${"movies"}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._getResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._url}${"movies"}/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getResponse);
  }
}

export default MainApi;
