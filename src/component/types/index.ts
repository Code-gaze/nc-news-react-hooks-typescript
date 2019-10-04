export interface ITopic {
  slug: string;
  description: string;
}

export interface article {
  article_id: number;
  title: string;
  comment_count: number;
  topic: string;
  votes: number;
  created_at: string;
  author:string;
}
