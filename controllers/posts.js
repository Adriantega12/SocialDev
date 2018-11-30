const { Post } = require('../models');

class PostsController {
  static async getAll(req, res, next) {

  }

  static async get(req, res, next) {
    let post;

    try {
      post = await Post.get(req.params.postId);
    } catch (error) {
      next(error);
    }

    res.render('posts/show', { ...post, isAuthor: false }, (error, html) => {
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
      res.redirect(`posts/${newPost.id}`);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    let post;

    try {
      post = await Post.get(req.params.postId);
      res.render('posts/edit', post);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {

  }

  static async delete(req, res, next) {
    let deleted;

    try {
      deleted = await Post.delete(req.params.postId);
    } catch (error) {
      next(error);
    }

    // Some kind of redirect happens after this
    /*if (deleted) {
      res.redirect();
    } else {

    }*/
  }
}

module.exports = PostsController;
