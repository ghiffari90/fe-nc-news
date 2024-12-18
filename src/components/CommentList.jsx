import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentList({ article_id, setClicked }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading ...</p>;
  if (comments.length === 0) {
    return;
  }
  return comments.map((comment, index) => {
    return <CommentCard key={index} comment={comment} />;
  });
}
