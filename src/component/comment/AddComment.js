import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Style from "./AddComment.module.css";
import { Store } from "../store/comments";
import { UserContext } from "../store/UserContext";
import { addComment } from "../api";

const AddComment = ({id}) => {
  const { state, dispatch } = useContext(Store);
  let user = useContext(UserContext);
  const [text, setText] = useState("");
  const handleChange = e => setText(e.target.value);

  const onHandleSubmit = e => {
    e.preventDefault();
    addComment(id, { username: user, body: text }).then(comment => {
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          comments: [comment, ...state.comments],
          status: "loaded"
        }
      });
    });
    setText('');
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
