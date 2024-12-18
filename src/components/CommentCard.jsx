export default function CommentCard({ comment }) {
  const dateArr = comment.created_at.split(/\D+/);
  const date = new Date(
    Date.UTC(
      dateArr[0],
      dateArr[1],
      dateArr[2],
      dateArr[3],
      dateArr[4],
      dateArr[5]
    )
  );
  console.log(date, "<<< date");
  return (
    <section className="comment-card">
      <h3>{comment.author}</h3>
      <p className="comment-date">{date.toString()}</p>
      <p className="comment-content">{comment.body}</p>
    </section>
  );
}
