import * as React from "react";
import { IUser } from "../types/index";
import { getUser } from "../api";
import useFetchID from "../hooks/useFetchID";
import { LinearProgress } from "@material-ui/core";
import ToggleButton from "../button/ToggleButton";
import ArticleList from "../article/ArticleList";
import UserItem from "./UserItem";
import { StoreProvider } from '../store/comments';
import CommentList from '../comment/CommentList';
import { getCommentsByUser } from '../api';

interface IUserPageProps {
  author?: string;
}

const UserPage: React.FunctionComponent<IUserPageProps> = ({ author }) => {
  const [ShowList, setShowList] = React.useState("Articles");
  const handleListToggle = (listName: string) => setShowList(listName);
  const data = useFetchID<IUser>(getUser, author);

  return (
    <div>
      <hr />
      {data.status === "loading" && <LinearProgress />}
      {data.status === "error" && <p>error: {data.error}</p>}
      {data.status === "loaded" && <UserItem user={data.payload} />}
      {data.status === "loaded" && (
        <ToggleButton
          left={"Articles"}
          right={"Comments"}
          onClick={handleListToggle}
        />
      )}
      {data.status === "loaded" &&
        (ShowList === "Articles" ? (
          <ArticleList author={author} />
        ) : (
          <StoreProvider>
            {author && <CommentList id={author} getComments={getCommentsByUser} />}
          </StoreProvider>
        ))}
    </div>
  );
};

export default UserPage;
