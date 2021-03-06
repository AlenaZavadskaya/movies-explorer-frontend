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

  getUserMovies() {
    if (this._headers.authorization !== "Bearer null") {
      return fetch(`${this._url}${"movies"}`, {
        method: "GET",
        headers: this._headers,
      }).then(this._getResponse)
    }
  }
}

const mainApi = new MainApi({
	// url: "https://api.alenazavadskaya.students.nomoredomains.monster/",
	url: 'http://localhost:3000/',
	headers: {
		authorization: `Bearer ${localStorage.getItem("jwt")}`,
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export default mainApi;
