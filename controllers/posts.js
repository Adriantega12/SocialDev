const { Post } = require('../models');

class PostsController {
  static async getAll(req, res, next) {
    res.send('This was supposed to be a put');
  }

  static async get(req, res, next) {
    try {
      const { status, response: post } = await Post.get(req.params.postId);
      const viewFields = {
        ...post,
        isAuthor: res.locals.hasSession ? (post.userId === req.session.user.id) : false,
      };

      if (status === 200) {
        res.render('posts/show', viewFields);
      } else if (status >= 400) {
        res.redirect('/error');
      }
    } catch (error) {
      next(error);
    }
  }

  static async insert(req, res, next) {
    try {
      const { status, response: newPost } = await Post.insert(req.body, req.cookies[`${process.env.COOKIE_NAME}`]);
      if (status === 201) {
        res.redirect(`posts/${newPost.id}`);
      } else if (status === 409) {
        res.redirect('/error');
      }
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { status, response: post } = await Post.get(req.params.postId);
      if (req.session.user.id === post.userId) {
        res.render('posts/edit', post);
      } else {
        throw next({
          status: 403,
          message: 'You don\'t have permission to do this.',
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { status, response: post } = await Post.update({
        id: req.params.postId,
        ...req.body.post,
      },
      req.cookies[`${process.env.COOKIE_NAME}`]);
      res.redirect(`${req.params.postId}`);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await Post.delete(req.params.postId, req.cookies[`${process.env.COOKIE_NAME}`]);
      res.redirect('/posts');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostsController;
