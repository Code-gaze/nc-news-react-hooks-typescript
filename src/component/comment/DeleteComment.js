import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Store } from "../store/comments";
import { UserContext } from "../store/UserContext";
import { deleteComment } from "../api";

const DeleteComment = ({ comment_id, author }) => {
  const { state, dispatch } = useContext(Store);
  let user = useContext(UserContext);
  const handleDelete = id => {
    deleteComment(id).then(() => {
      dispatch({
        type: "DELETE_COMMENT",
        payload: {
          comments: state.comments.filter(comment => comment.comment_id !== id),
          status: "loaded"
        }
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
        Delete{" "}
      </Button>
    </div>
  );
};

export default DeleteComment;
