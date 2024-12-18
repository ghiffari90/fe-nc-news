import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleByArticleId } from "../utils/api";
import CommentList from "./CommentList";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  useEffect(() => {
    setIsLoading(true);
    getArticleByArticleId(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <section>
        <h3>{article.title}</h3>
        <p>By: {article.author}</p>
        <img src={article.article_img_url} />
        <p>{article.body}</p>
      </section>
      <button onClick={handleClick}>
        View comments: {article.comment_count}
      </button>
      <p>{clicked ? <CommentList article_id={article_id} /> : null}</p>
    </>
  );
}
