import React from "react";
import Comment from "./Comment";

const CommentsList = ({ data }) => {
  return data.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5">
        <CommentsList data={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
