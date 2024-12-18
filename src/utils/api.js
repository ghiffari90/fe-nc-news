import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://my-nc-news-6ej0.onrender.com/api",
});

export function getApi() {
  return newsApi.get("/").then((response) => {
    return response.data;
  });
}

export function getArticleByArticleId(article_id) {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

export function getAllArticles() {
  return newsApi.get("/articles").then(({ data }) => {
    return data;
  });
}

export function getComments(article_id) {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
}
