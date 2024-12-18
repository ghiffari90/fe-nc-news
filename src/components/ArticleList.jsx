import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ limit }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
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
