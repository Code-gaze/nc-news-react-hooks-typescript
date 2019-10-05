export interface ITopic {
  slug: string;
  description: string;
}

export interface IArticle {
  article_id: number;
  title: string;
  body?: string;
  comment_count: number;
  topic: string;
  votes: number;
  created_at: string;
  author: string;
}

export interface IArticles {
  articles: {
    articles: IArticle[];
    total_count: number;
  };
}
