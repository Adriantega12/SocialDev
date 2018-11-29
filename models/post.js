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

  static async get(postId) {
    let data;

    try {
      data = await api.get('posts', postId);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async insert(post) {

  }

  async update(keyVals) {

  }

  static async delete(postId) {

  }
}

module.exports = Post;
