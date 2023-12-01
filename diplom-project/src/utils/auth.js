

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}

export const register = ({ email, password, name }) => {
  return fetch("https://glumakoffdiplom.nomoredomainsrocks.ru/signup", {
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
  return fetch("https://glumakoffdiplom.nomoredomainsrocks.ru/signin", {
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
  return fetch("https://glumakoffdiplom.nomoredomainsrocks.ru/users/me", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const logout = () => {
  return fetch("https://glumakoffdiplom.nomoredomainsrocks.ru/signout", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
