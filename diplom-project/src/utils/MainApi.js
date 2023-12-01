

const options = {

  headers: {
    "Content-Type": "application/json",
  },
};



class MainApi {
  constructor(options) {
  
    this.headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getInitialMovie() {
    return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/movies", {
      method: "GET",
      credentials: "include",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }


  editUserInfo(data) {
    return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/users/me", {
      method: "PATCH",
      credentials: "include",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getUserInfo() {
    return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/users/me", {
      method: "GET",
      credentials: "include",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  saveMovie(movie) {
    return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/movies", {
      method: "POST",
      credentials: "include",
      headers: this.headers,
      body: JSON.stringify(movie),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteMovie(movieId) {
    return fetch(`https://glumakoffdiplomfront.nomoredomainsmonster.ru/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const api = new MainApi(options);

export default api;
