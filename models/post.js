const api = require('../api');

class Post {
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

  static async getTop() {
    let data;

    try {
      data = await api.getAll('posts/network');
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async getHomeFeed(token) {
    let data;

    try {
      data = await api.getAll('users/feed', token);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async get(postId) {
    let data;

    try {
      data = await api.get('posts', postId);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async insert(post, token) {
    let data;

    try {
      data = await api.insert('posts', post, token);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async update(keyVals, token) {
    let data;
    try {
      data = await api.update('posts', keyVals, keyVals.id, token);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async delete(postId, token) {
    try {
      await api.delete('posts', postId, token);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Post;
