import * as React from "react";
import useFetch from "../hooks/useFetch";
import { getTopics } from "../api";
import { Link } from "@reach/router";

export interface topic {
  slug: string;
  description: string;
}

const Navigation: React.FunctionComponent = () => {
  const data = useFetch<topic[]>(getTopics);

  return (
    <nav>
      <Link to={`/`} className="title-link">
        Home
      </Link>
      {data.status === "loading" && <p>loading...</p>}
      {data.status === "error" && <p>error: {data.error}</p>}
      {data.status === "loaded" &&
        data.payload.map(topic => (
          <Link
            to={`/topics/${topic.slug}`}
            key={topic.slug}
            className="title-link"
          >
            {topic.slug}
          </Link>
        ))}
    </nav>
  );
};

export default Navigation;
