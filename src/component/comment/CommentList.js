import React, { Component } from 'react';
import Comment from '../comment/Comment';
import { deleteComment, addComment } from '../api';
import DeleteComment from '../button/DeleteComment';
import ErrorMsg from '../error/Error';
import ToggleButton from '../button/ToggleButton';
import SortSelect from '../button/SortSelect';
import { COMMENT_SORT_CHART } from '../constant';
import Loader from 'react-loader-spinner';

const INITIAL_STATE = {
  comments: null,
  error: '',
  loading: false,
  sort_by: 'created_at',
  order: 'desc'
}
class CommentList extends Component {
  state = {
    ...INITIAL_STATE
  }
  render() {
    const { comments, loading, error, sort_by } = this.state;
    if (error) return <ErrorMsg error={error} />
    return (
      <div>
        {this.props.render && this.props.render(this.handleSubmit)}
        {loading && <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />}
        <div className="article-sort-order">
          <SortSelect onChange={this.handleSortChange}
            sortValue={COMMENT_SORT_CHART[sort_by]}
            options={["date", "votes", "author"]} />
          <ToggleButton left={"desc"} right={"asc"} onClick={this.handleToggle} />
        </div>
        {comments && comments.map(comment => <Comment key={comment.comment_id} {...comment}>
          <DeleteComment comment_id={comment.comment_id} handleDelete={this.handleDelete} author={comment.author} currentUser={this.props.currentUser} />
        </Comment>)
        }
      </div>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by
      || prevState.order !== this.state.order
    ) {
      this.fetchComments();
    }
  }
  fetchComments = () => {
    this.setState({
      loading: true
    });
    this.props.getComments(this.props.id, this.state.sort_by, this.state.order)
      .then(comments => {
        this.setState({
          loading: false,
          comments,
        })
      })
      .catch(error => {
        this.setState({
          ...INITIAL_STATE,
          error,
        })
      })
  }
  handleSortChange = ({ target }) => {
    const { value } = target;
    this.setState({
      sort_by: COMMENT_SORT_CHART[value]
    })
  }
  handleToggle = (order) => {
    this.setState({
      order
    })
  }
  handleSubmit = (text) => {
    const { id, currentUser } = this.props;
    addComment(id, { username: currentUser, body: text })
      .then(comment => {
        this.setState(prev => ({
          comments: [comment, ...prev.comments]
        }))
      })
      .catch(error => {
        this.setState({
          ...INITIAL_STATE,
          error,
        })
      })
  }
  handleDelete = (id) => {
    deleteComment(id)
      .then(() => {
        this.setState(({ comments }) => ({
          comments: comments.filter(comment => comment.comment_id !== id)
        }))

      })
      .catch(error => {
        this.setState({
          ...INITIAL_STATE,
          error,
        })
      })
  }
}

export default CommentList;