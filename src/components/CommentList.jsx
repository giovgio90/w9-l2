import SingleComment from "./SingleComment";

const CommentList = ({ comments }) => {
  return (
    <div className="comments-list">
      <h3>Recensioni:</h3>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
