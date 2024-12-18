import { useState, useEffect } from "react";
import { getArticleByArticleId } from "../utils/api";

export default function LeadArticle() {
  const [mainArticle, setMainArticle] = useState({});
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleByArticleId(2).then(({ article }) => {
      setMainArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h1>{mainArticle.title}</h1>
      <p>By: {mainArticle.author}</p>
      <p>{mainArticle.body}</p>
    </section>
  );
}
