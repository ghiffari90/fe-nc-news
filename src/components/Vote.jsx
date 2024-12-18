import { useState } from "react";
import { updateArticleByArticleId } from "../utils/api";

export default function Votes({ article }) {
  const [votesAdded, setVotesAdded] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    updateArticleByArticleId(article.article_id).catch((err) => {
      console.log(err, "<<< error");
      setVotesAdded((currVotesAdded) => currVotesAdded - 1);
    });
    setVotesAdded((currVotesAdded) => currVotesAdded + 1);
  };

  return (
    <>
      <p>Votes: {article.votes + votesAdded}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
}
