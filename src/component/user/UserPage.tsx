import * as React from "react";
import { IUser } from '../types/index';
import { getUser } from '../api';

interface IUserPageProps {}

const UserPage: React.FunctionComponent<IUserPageProps> = props => {
  const [showList, setShowList] = React.useState("Articles");
  const  handleListToggle = (listName) => setShowList(listName)
    return (
        <div>
            <hr />
            {data.status === "loading" && <LinearProgress />}
            {data.status === "error" && <p>error: {data.error}</p>}
            {user && <UserItem user={user} />}
            {user && <ToggleButton left={"Articles"} right={"Comments"} onClick={this.handleListToggle} />}
            {user && (ShowList === "Articles" ? <ArticleList author={user.username} />
                : <CommentListWithUser id={user.username} getComments={getCommentsByUser} />
            )}
        </div>
    );
};

export default UserPage;
