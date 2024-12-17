import { useState, useEffect } from "react";
import { getArticleByArticleId } from "../utils/api";

export default function LeadArticle() {
  const [mainArticle, setMainArticle] = useState({});
  useEffect(() => {
    getArticleByArticleId(2).then(({ article }) => {
      setMainArticle(article);
    });
  }, []);

  return (
    <form>
      <h1>{mainArticle.title}</h1>
      <p>By: {mainArticle.author}</p>
      <p>{mainArticle.body}</p>
    </form>
  );
}
