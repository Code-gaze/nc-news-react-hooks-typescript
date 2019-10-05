import * as React from 'react';
import { IArticle } from '../types/index';
import Style from './Article.module.css';
import { updateArticle } from '../api';
import Vote from '../button/Vote';
import { Link } from '@reach/router';

const Article: React.FunctionComponent<IArticle> = ({
    article_id,
    title,
    body,
    author,
    topic,
    votes,
    created_at,
    comment_count }) => {
    return (
        <div className={Style.article} >
            <div className={Style.left}>
                <span className={Style.tag}><Link to={`/topics/${topic}`} >topic: {topic} </Link></span>
                <span className={Style.tag}><Link to={`/users/${author}`} >
                    Author: {author}</Link></span>
                <span className={Style.tag}>Date: {created_at.split("T")[0]}</span>
                <span className={Style.tag}>Comments: {comment_count}</span>
            </div>
            <div className={Style.mid}>
                <p><strong>Title: {title}</strong></p>
                <p>Text: {body}</p>
            </div>
            <div className={Style.right}>
                <Vote votes={votes} id={article_id} handleVote={updateArticle} />
            </div>
        </div>
    );
};

export default Article;
