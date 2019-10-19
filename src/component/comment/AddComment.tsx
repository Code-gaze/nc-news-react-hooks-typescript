import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Style from "./AddComment.module.css";
import { Store, IAction, CommentsLoaded } from "../store/comments";
import { UserContext } from "../store/UserContext";
import { addComment } from "../api";
import { IComment } from "../types";

interface IProps {
  id: number;
}

const AddComment: React.FunctionComponent<IProps> = ({ id }) => {
  const { state, dispatch } = useContext(Store);
  let user = useContext(UserContext);
  let castUser = user as string;
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onHandleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { username: castUser, body: text };
    addComment(id, body).then((comment: IComment) => {
      (dispatch as React.Dispatch<IAction>)({
        type: "ADD_COMMENT",
        payload: { comments: [comment, ...(state as CommentsLoaded).comments], status:"loaded"}
      });
    });
    setText("");
  };

  return (
    <div className={Style.outline}>
      <h4>Post a comment to this article with current author</h4>
      <form onSubmit={onHandleSubmit}>
        <div className={Style.form}>
          <div className={Style.body}>
            <TextField
              label="comment"
              value={text}
              onChange={handleChange}
              margin="none"
              fullWidth
            />
          </div>
          <div className={Style.submit}>
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
              disabled={!text}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
