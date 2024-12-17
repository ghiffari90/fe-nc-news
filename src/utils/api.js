import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://my-nc-news-6ej0.onrender.com/api",
});

function getApi() {
  return newsApi.get("/").then((response) => {
    return response.data;
  });
}

function getArticles() {
  return newsApi.get("/articles").then((response) => {
    return response.data;
  });
}

export { getApi, getArticles };
