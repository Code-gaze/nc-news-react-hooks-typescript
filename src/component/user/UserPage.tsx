import * as React from "react";
import { IUser } from '../types/index';
import { getUser } from '../api';
import useFetch from '../hooks/useFetch';
import { LinearProgress } from "@material-ui/core";

interface IUserPageProps {}

const UserPage: React.FunctionComponent<IUserPageProps> = props => {
  const [showList, setShowList] = React.useState("Articles");
  const  handleListToggle = (listName) => setShowList(listName);
    const data = useFetch<IUser>(
        getUser,
    );
    return (
        <div>
            <hr />
            {data.status === "loading" && <LinearProgress />}
            {data.status === "error" && <p>error: {data.error}</p>}
            {data.status === "loaded" && <UserItem user={user} />}
            {data.status === "loaded" && <ToggleButton left={"Articles"} right={"Comments"} onClick={this.handleListToggle} />}
            {data.status === "loaded" && (ShowList === "Articles" ? <ArticleList author={user.username} />
                : <CommentListWithUser id={user.username} getComments={getCommentsByUser} />
            )}
        </div>
    );
};

export default UserPage;
