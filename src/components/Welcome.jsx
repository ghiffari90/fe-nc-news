import { Link } from "react-router";
import ArticleList from "./ArticleList";
import LeadArticle from "./LeadArticle";

export default function Welcome() {
  return (
    <>
      <LeadArticle />
      <ArticleList limit={3} />
      <Link to="/articles">
        <button>see more articles...</button>
      </Link>
    </>
  );
}
