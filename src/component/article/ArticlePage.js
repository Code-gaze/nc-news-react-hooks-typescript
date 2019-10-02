import React, { Component } from 'react';
import { getArticle, getCommentsByArticle } from '../api';
import Article from './Article';
import AddComment from '../comment/AddComment';
import ErrorMsg from '../error/Error';
import { CommentListWithUser } from '../UserContext';
import Loader from 'react-loader-spinner';

const INITIAL_STATE = {
  article: null,
  error: '',
  loading: false
}
class ArticlePage extends Component {
  state = {
    ...INITIAL_STATE
  }

  render() {
    const { id } = this.props;
    const { loading, error, article } = this.state;
    if (error) return <ErrorMsg error={error} />
    return (
      <div>
        {loading && <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />}
        <h3>Article and Its Comments </h3>
        {article && <Article {...article} />}
        <hr />
        <CommentListWithUser id={id} getComments={getCommentsByArticle}
          render={handleSubmit => <AddComment onSubmit={handleSubmit} />}
        />
        <hr />
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      ...INITIAL_STATE,
      loading: true
    });
    getArticle(this.props.id)
      .then(article => {
        this.setState({
          ...INITIAL_STATE,
          article,
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

export default ArticlePage;