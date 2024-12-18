import { Link } from "react-router";

export default function ArticleCard({ article }) {
  return (
    <Link to={"/articles/" + article.article_id}>
      <section className="article-card">
        <h3>{article.title}</h3>
        <p>By: {article.author}</p>
        <img src={article.article_img_url} />
      </section>
    </Link>
  );
}
