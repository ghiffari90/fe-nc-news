import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
      console.log(articles, "<<<< articles");
    });
  }, []);

  return articles.map((article) => {
    return <p>{JSON.stringify(article, null, 2)}</p>;
  });
}
