import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Store } from "../store/comments";
import {UserContext} from "../store/UserContext"

const DeleteComment = ({ comment_id, author, currentUser }) => {

   let user = useContext(UserContext)
   const handleDelete=(id)=>{

   }
   return (
      <div className="deletebutton">
         <Button variant="contained" size="small" color="secondary"
            onClick={() => handleDelete(comment_id)}
            disabled={user !== author}
         > Delete </Button></div>
   );
};

export default DeleteComment;