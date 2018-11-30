const { Post } = require('../models');

class PostsController {
  constructor() {
    /*this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);*/
  }

  static async getAll(req, res, next) {

  }

  static async get(req, res, next) {
    const post = await Post.get(req.params.postId);
    res.render('post', post, (error, html) => {
      if (error) {
        next(error);
      } else {
        res.send(html);
      }
    });
  }

  static async insert(req, res, next) {
    let newPost;

    try {
      newPost = await Post.insert(req.body);
    } catch (error) {
      next(error);
    }

    res.redirect(`posts/${newPost.id}`);
  }

  static async update(req, res, next) {

  }

  static async delete(req, res, next) {

  }
}

module.exports = PostsController;
