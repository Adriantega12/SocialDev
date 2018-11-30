const { Post } = require('../models');

class PostsController {
  static async getAll(req, res, next) {
    res.send('This was supposed to be a put');
  }

  static async get(req, res, next) {
    let post;

    try {
      post = await Post.get(req.params.postId);
    } catch (error) {
      next(error);
    }

    res.render('posts/show', { ...post, isAuthor: true }, (error, html) => {
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
    try {
      const response = await Post.update({
        id: req.params.postId,
        ...req.body.post,
      });
      console.log(response);
      res.redirect(`${req.params.postId}`);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await Post.delete(req.params.postId);
      res.redirect('/posts');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostsController;
