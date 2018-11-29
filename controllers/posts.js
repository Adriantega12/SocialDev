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
    console.log(Post.get(req.params.postId));
    res.send('Kay');
  }

  static async insert(req, res, next) {

  }

  static async update(req, res, next) {

  }

  static async delete(req, res, next) {

  }
}

module.exports = PostsController;
