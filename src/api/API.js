import axios from "axios";

let token = `d163a1bc0668ef9deb35e9f874eeddf22c916929`;

const BASE_URL = `https://front-lalafo-students.prolabagency.com/api/v1/`;


const API = axios.create({
  baseURL: BASE_URL,
});

const AUTH_API = axios.create({
  baseURL: BASE_URL,
});

AUTH_API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user-token");

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
)

AUTH_API.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    if (
      (err.response && err.response.status === 401) ||
      err.response.status === 403
    ) {
      localStorage.clear();
      window.location.replace("/");
    }
    return Promise.reject(err);
  },
);

export { AUTH_API, API };
