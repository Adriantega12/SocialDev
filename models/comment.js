const api = require('../api');

class Comment {
  constructor({
    id,
    userId,
    title,
    text,
    date,
    score,
  }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.text = text;
    this.date = date;
    this.score = score;
  }

  static async getAll() {

  }

  static async get(postId, commentId) {
    let data;

    try {
      data = await api.get(`posts/${postId}/comments`, commentId);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async insert(postId, comment, token) {
    let data;

    try {
      data = await api.insert(`posts/${postId}/comments`, comment, token);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async update(postId, keyVals, token) {
    let data;

    try {
      data = await api.update(`posts/${postId}/comments`, keyVals, keyVals.id, token);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async delete(postId, commentId, token) {
    try {
      await api.delete(`posts/${postId}/comments`, commentId, token);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Comment;
