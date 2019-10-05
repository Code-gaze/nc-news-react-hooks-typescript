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

export interface IArticleListProps {
    topic?: "" | "cooking" | "coding" | "football",
    author?: string,
    sort_by?: string,
    order?: "asc" | "desc",
    limit?: number,
    p?: number
}

const ArticleList: React.FunctionComponent<IArticleListProps> = ({topic, author, sort_by,order,limit,p}) => {
    const data = useFetch<IArticles>(getArticles, topic, author, sort_by, order, limit, p);
  return (
    <div>
      {data.status === "loading" && <CircularProgress size={20} />}
      {data.status === "error" && <p>error: {data.error}</p>}
      <div className="article-sort-order"></div>
      {data.status === "loaded" &&
        data.payload.articles.articles.map(article => (
          <ArticleItem key={article.article_id} article={article} />
        ))}
    </div>
  );
};

export default ArticleList;
