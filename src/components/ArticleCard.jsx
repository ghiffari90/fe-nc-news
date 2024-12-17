export default function ArticleCard({ article }) {
  return (
    <form>
      <h3>{article.title}</h3>
      <p>By: {article.author}</p>
    </form>
  );
}
