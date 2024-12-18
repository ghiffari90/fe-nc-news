import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleByArticleId } from "../utils/api";
import CommentList from "./CommentList";
import Votes from "./Vote";

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
      <Votes article={article} />
      <button onClick={handleClick}>
        View comments: {article.comment_count}
      </button>
      {clicked ? (
        <CommentList article_id={article_id} setClicked={setClicked} />
      ) : null}
    </>
  );
}
