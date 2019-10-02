import React from 'react';
import { Button } from '@material-ui/core';

const DeleteComment = ({ handleDelete, comment_id, author, currentUser }) => {
   return (
      <div className="deletebutton">
         <Button variant="contained" size="small" color="secondary"
            onClick={() => handleDelete(comment_id)}
            disabled={currentUser !== author}
         > Delete </Button></div>
   );
};

export default DeleteComment;