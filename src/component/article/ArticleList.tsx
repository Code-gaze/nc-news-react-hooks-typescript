import * as React from "react";
import useFetch from "../hooks/useFetch";
import { IArticles } from "../types/index";
import { getArticles } from "../api";
import ArticleItem from "./ArticleItem";
import { LinearProgress } from "@material-ui/core";
import SortSelect from '../button/SortSelect';
import ToggleButton from '../button/ToggleButton';
import Page from "./Page";
import LimitSelect from "../button/LimitSelect";

interface IArticleListProps {
  topic?: "cooking" | "coding" | "football";
  author?: string;
}

const ArticleList: React.FunctionComponent<IArticleListProps> = ({
  topic,
  author
}) => {
  const handleOrderClick = (value: string): void => setOrder(value);
  const handlePageClick = (value: number): void => setP(value);
  const resetPage = (): void => setP(1);
  const handleLimitChange = (
    e: React.ChangeEvent<{
      value: number;
    }>
  ) => setLimit(e.target.value);
  const handleSortChange = (
    e: React.ChangeEvent<{
      value: string;
    }>
  ) => setSort_by(e.target.value);

  const [sort_by, setSort_by] = React.useState("created_at");
  const [order, setOrder] = React.useState("desc");
  const [limit, setLimit] = React.useState(6);
  const [p, setP] = React.useState(1);

  const data = useFetch<IArticles>(
    getArticles,
    topic,
    author,
    sort_by,
    order,
    limit,
    p,
    resetPage
  );
  return (
    <div>
      {data.status === "loading" && <LinearProgress />}
      {data.status === "error" && <p>error: {data.error}</p>}
      <div className="article-sort-order">
              <SortSelect
                  onChange={handleSortChange}
                  sortValue={sort_by}
                  options={["created_at", "votes", "author", "comments"]}
              />
              <ToggleButton
                  left={"desc"}
                  right={"asc"}
                  onClick={handleOrderClick}
              />
      </div>
      {data.status === "loaded" &&
        data.payload.articles.articles.map(article => (
          <ArticleItem key={article.article_id} article={article} />
        ))}
      {data.status === "loaded" && (
        <Page
          pageTotal={Math.ceil(data.payload.articles.total_count / limit)}
          onClick={handlePageClick}
          p={p}
        />
      )}
      <LimitSelect onChange={handleLimitChange} limit={limit} />
    </div>
  );
};

export default ArticleList;
