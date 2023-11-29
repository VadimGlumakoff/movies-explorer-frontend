

const options = {
  
  headers: {
    "Content-Type": "application/json",
  },
};

class MoviesApi {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getMovies() {
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      headers: this._headers,
      method: "GET",
    }).then(this._checkResponse);
  }
}

const apiMovies = new MoviesApi(options);

export default apiMovies;
