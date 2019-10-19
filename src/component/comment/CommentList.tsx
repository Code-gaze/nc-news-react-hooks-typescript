import * as React from "react";
import Comment from "./Comment";
import { LinearProgress } from "@material-ui/core";
import {
  Store,
  IAction,
  CommentsLoaded,
  CommentsLoading
} from "../store/comments";
import DeleteComment from "./DeleteComment";
import { IComment } from "../types";

interface IProps {
  id: number | string;
  getComments: (id: string | number) => Promise<IComment[]>;
}

const CommentList: React.FunctionComponent<IProps> = ({ id, getComments }) => {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    getComments(id).then(data => {
      (dispatch as React.Dispatch<IAction>)({
        type: "FETCH_COMMENTS",
        payload:{comments:data, status:"loaded"  }}
      );
    });
  }, [getComments, id]);
  return (
    <div>
      {(state as CommentsLoading).status === "loading" && <LinearProgress />}
      <h3>Comments</h3>
      {(state as CommentsLoaded).status === "loaded" &&
        (state as CommentsLoaded).comments.map(comment => (
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
