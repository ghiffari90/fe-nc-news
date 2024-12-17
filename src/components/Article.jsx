import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleByArticleId } from "../utils/api";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  console.log(article_id, "<<< article_id");
  useEffect(() => {
    getArticleByArticleId(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, []);
  return (
    <form>
      <h3>{article.title}</h3>
      <p>By: {article.author}</p>
      <p>{article.body}</p>
    </form>
  );
}
