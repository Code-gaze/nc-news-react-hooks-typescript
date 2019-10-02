import React, { Component } from 'react';
import UserItem from './UserItem';
import { getUser, getCommentsByUser } from '../api';
import ToggleButton from '../button/ToggleButton'
import ErrorMsg from '../error/Error';
import ArticleList from '../article/ArticleList';
import { CommentListWithUser } from '../UserContext';
import Loader from 'react-loader-spinner';

const INITIAL_STATE = {
  user: null,
  error: '',
  loading: false,
  ShowList: "Articles",
}
class UserPage extends Component {
  state = {
    ...INITIAL_STATE
  }
  handleListToggle = (listName) => {
    this.setState({
      ShowList: listName
    })
  }
  render() {
    const { user, loading, error, ShowList } = this.state;
    if (error) return <ErrorMsg error={error} />
    return (
      <div>
        <hr />
        {loading && <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />}
        {user && <UserItem user={user} />}
        {user && <ToggleButton left={"Articles"} right={"Comments"} onClick={this.handleListToggle} />}
        {user && (ShowList === "Articles" ? <ArticleList author={user.username} />
          : <CommentListWithUser id={user.username} getComments={getCommentsByUser} />
        )}
      </div>
    );
  }
  componentDidMount() {
    this.fetchUser()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.author !== this.props.author) {
      this.fetchUser();
    }
  }
  fetchUser = () => {
    this.setState({
      loading: true
    });
    getUser(this.props.author)
      .then(user => {
        this.setState({
          ...INITIAL_STATE,
          user,
        })
      })
      .catch(error => {
        this.setState({
          ...INITIAL_STATE,
          error,
        })
      })
  }
}

export default UserPage;