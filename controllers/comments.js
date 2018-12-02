const { Comment } = require('../models');

class CommentsController {
  static async getAll(req, res, next) {
    res.send('This was supposed to be a put');
  }

  static async get(req, res, next) {
    try {
      const { status, response: comment } = await Comment.get(req.params.postId, req.params.commentId);
      const viewFields = {
        ...comment,
        isAuthor: res.locals.hasSession ? (comment.userId === req.session.user.id) : false,
      };

      if (status === 200) {
        //res.render('posts/show', viewFields);
      } else if (status >= 400) {
        res.redirect('/error');
      }
    } catch (error) {
      next(error);
    }
  }

  static async insert(req, res, next) {
    try {
      const { status, response } = await Comment.insert(
        req.params.postId,
        req.body.comment,
        req.cookies[`${process.env.COOKIE_NAME}`],
      );
      if (status === 201) {
        res.redirect(`/posts/${req.params.postId}`);
      } else if (status === 409) {
        res.redirect('/error');
      }
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { status, response: comment } = await Comment.update(
        req.params.postId,
        {
          id: req.params.commentId,
          ...req.body.comment,
        },
        req.cookies[`${process.env.COOKIE_NAME}`],
      );
      res.redirect(`/posts/${req.params.postId}`);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await Comment.delete(req.params.postId, req.params.commentId, req.cookies[`${process.env.COOKIE_NAME}`]);
      res.redirect(`/posts/${req.params.postId}`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CommentsController;
