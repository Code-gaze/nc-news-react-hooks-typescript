import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getTopics } from './api';
import Loader from 'react-loader-spinner';

const INITIAL_STATE = {
  topics: null,
  error: '',
  loading: false
}

class Navigation extends Component {
  state = {
    ...INITIAL_STATE
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    getTopics()
      .then(topics => {
        this.setState({
          ...INITIAL_STATE,
          topics,
        })
      })
      .catch(error => {
        this.setState({
          ...INITIAL_STATE,
          error,
        })
      })
  }
  render() {
    const { topics, loading, error } = this.state;
    return (
      <nav >
        <Link to={`/`} className="title-link">Home</Link>
        {loading && <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />}
        {error && <p>error: {error}</p>}
        {topics && topics.map(topic => <Link to={`/topics/${topic.slug}`} key={topic.slug} className="title-link">{topic.slug}</Link>
        )}
      </nav>
    );
  }

};

export default Navigation;