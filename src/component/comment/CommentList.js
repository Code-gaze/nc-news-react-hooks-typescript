import * as React from "react";
import Comment from "./Comment";
import { LinearProgress } from "@material-ui/core";
import { Store } from "../store/comments";
import DeleteComment from "./DeleteComment"

const CommentList = ({ id, getComments }) => {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    getComments(id).then(data => {
      dispatch({
        type: "FETCH_COMMENTS",
        payload: { payload: data, status: "loaded" }
      });
    });
  }, [getComments, id]);
  return (
    <div>
      {state.status === "loading" && <LinearProgress />}
      <h3>Comments</h3>
      {state.status === "loaded" &&
        state.payload.map(comment => (
          <Comment key={comment.comment_id} {...comment}>
            <DeleteComment
              comment_id={comment.comment_id}
              author={comment.author}
            />
          </Comment>
        ))}
    </div>
  );
};

export default CommentList;
