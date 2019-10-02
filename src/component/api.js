import axios from 'axios';

const request = axios.create({
 baseURL: "https://nc-news-rest-api.herokuapp.com/api"
})

export const getTopics = () => {
 return request.get('/topics').then(({ data }) => data.topics)
};

export const getArticles = (topic, author, sort_by, order, limit, p) => {
 return request.get(`/articles`, { params: { topic, author, sort_by, order, limit, p } }).then(({ data }) => data)
};

export const getUser = (username) => {
 return request.get(`/users/${username}`).then(({ data }) => data.user)
};

export const getArticle = (article_id) => {
 return request.get(`/articles/${article_id}`).then(({ data }) => data.article)
};

export const updateArticle = (id, body) => {
 return request.patch(`/articles/${id}`, body).then(({ data }) => data.article)
};

export const addComment = (article_id, body) => {
 return request.post(`/articles/${article_id}/comments`, body).then(({ data }) => data.comment)
};

export const getCommentsByArticle = (article_id, sort_by, order) => {
 return request.get(`/articles/${article_id}/comments`, { params: { sort_by, order } }).then(({ data }) => data.comments)
};

export const getCommentsByUser = (username, sort_by, order) => {
 return request.get(`/users/${username}/comments`, { params: { sort_by, order } }).then(({ data }) => data.comments)
};

export const updateComment = (id, body) => {
 return request.patch(`/comments/${id}`, body).then(({ data }) => data.comment)
};

export const deleteComment = (id) => {
 return request.delete(`/comments/${id}`)
};

