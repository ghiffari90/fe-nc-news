import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ limit }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  if (limit) {
    return articles.map((article, index) => {
      if (index <= limit) return <ArticleCard key={index} article={article} />;
    });
  } else {
    return articles.map((article, index) => {
      return <ArticleCard key={index} article={article} />;
    });
  }
}
