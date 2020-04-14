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
  },
  deleteArticle: function (articleId) {
    return axios.put("/api/user/delete/article/" + articleId)
  },
  viewSavedArticles: function () {
    return axios.get("/api/user/view/articles");
  },
  viewNotes: function (articleId) {
    return axios.get("/api/user/view/notes/" + articleId);
  },
  addNote: function (note) {
    return axios.post("/api/user/add/note", note)
  }
};
