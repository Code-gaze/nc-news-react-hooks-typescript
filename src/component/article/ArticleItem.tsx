import * as React from "react";
import Style from "./ArticleItem.module.css";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";
import { IArticle } from "../types/index";

interface IArticleItemProps {
  article: IArticle;
}

const ArticleItem: React.FunctionComponent<IArticleItemProps> = ({
  article: {
    article_id,
    title,
    comment_count,
    topic,
    votes,
    created_at,
    author
  }
}) => {
    return (
        <div className={Style.item}>
            <div className={Style.article}>
                <Link to={`/articles/${article_id}`} ><Button size="small" color="primary"> <h3>Title: {title} </h3></Button></Link>
            </div>
            <div className={Style.article}>
                <span className={Style.tag}><Link to={`/topics/${topic}`} ><Button size="small" color="primary">Topic: {topic} </Button></Link></span>
                <span className={Style.tag}><Link to={`/users/${author}`} ><Button size="small" color="primary">Author:  {author}</Button></Link></span>
            </div>
            <div className={Style.article}>
                <span className={Style.tag}>Votes: {votes} </span>
                <span className={Style.tag}>Comments: {comment_count} </span>
                <span className={Style.tag}>Date:  {created_at.split("T")[0]}</span></div>
        </div>
    );
};

export default ArticleItem;
