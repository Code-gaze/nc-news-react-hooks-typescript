import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-rest-api.herokuapp.com/api"
});

export const getTopics = () => {
  return request.get("/topics").then(({ data }) => data.topics);
};

export const getArticles = (
  topic?: "" | "cooking" | "coding" | "football",
  author?: string,
  sort_by?: string,
  order?: string,
  limit?: number,
  p?: number
) => {
  return request
    .get(`/articles`, { params: { topic, author, sort_by, order, limit, p } })
    .then(({ data }) => data);
};

export const getUser = (username: string | number | undefined) => {
  return request.get(`/users/${username}`).then(({ data }) => data.user);
};

export const getArticle = (article_id: string | number | undefined) => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data }) => data.article);
};

export const updateArticle = (id: number, body: { inc_votes: number }) => {
  return request
    .patch(`/articles/${id}`, body)
    .then(({ data }) => data.article);
};

export const addComment = (article_id: number, body: string) => {
  return request
    .post(`/articles/${article_id}/comments`, body)
    .then(({ data }) => data.comment);
};

export const getCommentsByArticle = (
  article_id: number,
  sort_by: string,
  order: string
) => {
  return request
    .get(`/articles/${article_id}/comments`, { params: { sort_by, order } })
    .then(({ data }) => data.comments);
};

export const getCommentsByUser = (
  username: string,
  sort_by: string,
  order: string
) => {
  return request
    .get(`/users/${username}/comments`, { params: { sort_by, order } })
    .then(({ data }) => data.comments);
};

export const updateComment = (id: number, body: { inc_votes: number }) => {
  return request
    .patch(`/comments/${id}`, body)
    .then(({ data }) => data.comment);
};

export const deleteComment = (id: number) => {
  return request.delete(`/comments/${id}`);
};
