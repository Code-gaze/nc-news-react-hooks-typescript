import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Store, IAction, CommentsLoaded } from "../store/comments";
import { UserContext } from "../store/UserContext";
import { deleteComment } from "../api";
import { IComment } from "../types/index";

interface IProps {
  comment_id: number;
  author: string;
}

const DeleteComment: React.FunctionComponent<IProps> = ({
  comment_id,
  author
}) => {
  const { state, dispatch } = useContext(Store);
  let castDispatch = dispatch as React.Dispatch<IAction>;
  let castState = state as CommentsLoaded;
  let user = useContext(UserContext);

  const handleDelete = (id: number) => {
    deleteComment(id).then(() => {
      castDispatch({
        type: "DELETE_COMMENT",
        payload: castState.payload.filter(
          (comment: IComment) => comment.comment_id !== id
        )
      });
    });
  };
  return (
    <div className="deletebutton">
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={() => handleDelete(comment_id)}
        disabled={user !== author}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteComment;
