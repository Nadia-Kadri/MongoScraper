import axios from "axios";

export default {
  scrape: function () {
    return axios.get("/api/article/scrape");
  },
  view: function () {
    return axios.get("/api/article/view");
  }
};
