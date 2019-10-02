import React, { Component } from 'react';
import { getArticles } from '../api';
import ArticleItem from './ArticleItem';
import ErrorMsg from '../error/Error'
import SortSelect from '../button/SortSelect';
import ToggleButton from '../button/ToggleButton';
import Page from './Page';
import LimitSelect from '../button/LimitSelect';
import { ARTICLE_SORT_CHART } from '../constant';
import Loader from 'react-loader-spinner';

const INITIAL_STATE = {
  articles: null,
  error: '',
  loading: false,
  sort_by: 'created_at',
  order: 'desc',
  limit: 6,
  p: 1
}

class ArticleList extends Component {
  state = {
    ...INITIAL_STATE
  }
  render() {
    const { articles, loading, error, sort_by, limit, p } = this.state
    if (error) return <ErrorMsg error={error} />
    return (
      <div>
        {loading && <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />}
        <div className="article-sort-order">
          <SortSelect onChange={this.handleChange}
            sortValue={ARTICLE_SORT_CHART[sort_by]}
            options={["date", "votes", "author", "comments"]}
          />
          <ToggleButton left={"desc"} right={"asc"} onClick={this.handleClick} />
        </div>
        {articles && articles.articles.map(article => <ArticleItem key={article.article_id} article={article} />)}
        {articles && <Page pageTotal={Math.ceil(articles.total_count / limit)} onClick={this.handleClick} p={p} />}
        <LimitSelect onChange={this.handleChange} limit={limit} />
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      ...INITIAL_STATE,
      loading: true
    });
    this.fetchArticles(1)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic
      || prevProps.author !== this.props.author
      || prevState.sort_by !== this.state.sort_by
      || prevState.order !== this.state.order
      || prevState.limit !== this.state.limit
    ) {
      this.fetchArticles(1);
    }
    if (prevState.p !== this.state.p) {
      this.fetchArticles(this.state.p);
    }
  }
  fetchArticles = (page) => {
    const { sort_by, order, limit, p } = this.state
    this.setState({
      loading: true
    });
    getArticles(this.props.topic, this.props.author, sort_by, order, limit, p)
      .then(({ articles }) => {
        this.setState({
          loading: false,
          p: page,
          articles
        })
      })
      .catch(error => {
        this.setState({
          ...INITIAL_STATE,
          error,
        })
      })
  }
  handleChange = ({ target }) => {
    const { value } = target;
    isNaN(value)
      ? this.setState({
        sort_by: ARTICLE_SORT_CHART[value]
      })
      : this.setState({
        limit: value
      })
  }
  handleClick = (value) => {
    isNaN(value)
      ? this.setState({
        order: value
      })
      : this.setState({
        p: value
      })
  }
}

export default ArticleList;