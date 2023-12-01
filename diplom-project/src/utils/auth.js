

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}

export const register = ({ email, password, name }) => {
  return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/signup", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const authorization = ({ email, password }) => {
  return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/signin", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = () => {
  return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/users/me", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const logout = () => {
  return fetch("https://glumakoffdiplomfront.nomoredomainsmonster.ru/signout", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
