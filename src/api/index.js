import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("token")
    )}`;
  }
  // console.log(req.headers.Authorization);
  return req;
});

export const login = (formData) => API.post("/users/logIn", formData);
export const userSignUp = (formData) => {
  API.post("/users/signUp", formData);
};
