import { Link } from "react-router";

export default function ArticleCard({ article }) {
  return (
    <Link to={"/articles/" + article.article_id}>
      <form>
        <h3>{article.title}</h3>
        <p>By: {article.author}</p>
      </form>
    </Link>
  );
}
