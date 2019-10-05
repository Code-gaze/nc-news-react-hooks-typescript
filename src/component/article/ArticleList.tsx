import * as React from "react";
import useFetch from "../hooks/useFetch";
import { IArticles } from "../types/index";
import { getArticles } from "../api";
import ArticleItem from "./ArticleItem";
import NotFound from "../error/NotFound";
import { CircularProgress } from "@material-ui/core";
// import SortSelect from '../button/SortSelect';
// import ToggleButton from '../button/ToggleButton';
import Page from "./Page";
// import LimitSelect from '../button/LimitSelect';
import { ARTICLE_SORT_CHART } from "../constant";

interface IArticleListProps {}

const ArticleList: React.FunctionComponent<IArticleListProps> = props => {
  const data = useFetch<IArticles>(getArticles);
  return (
    <div>
      {data.status === "loading" && <CircularProgress size={20} />}
      {data.status === "error" && <p>error: {data.error}</p>}
      <div className="article-sort-order"></div>
      {articles &&
        articles.articles.map(article => (
          <ArticleItem key={article.article_id} article={article} />
        ))}
    </div>
  );
};

export default ArticleList;
