export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const getInitialMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: headers,
  }).then((res) => {
    return getResponse(res);
  });
};
