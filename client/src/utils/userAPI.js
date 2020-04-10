import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/user/register", user);
  },
  login: function (user) {
    return axios.post("/api/user/login", user);
  },
  logout: function () {
    return axios.get("/api/user/logout");
  },
  availableUN: function (username) {
    return axios.get("/api/user/username/?username=" + username);
  },
  isAuthorized: function () {
    return axios.get("/api/user/authorized");
  },
  saveArticle: function (articleId) {
    return axios.put("/api/user/save/article/" + articleId)
  }
};
