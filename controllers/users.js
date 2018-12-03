const { User } = require('../models');

class UsersController {
  static async getAll(req, res, next) {
    res.send('This was supposed to be a put');
  }

  static async get(req, res, next) {
    try {
      const { status, response: user } = await User.get(req.params.userId);
      const viewFields = {
        ...user,
        isOwner: res.locals.hasSession
          ? (user.id === req.session.user.id) : false,
        isFriend: res.locals.hasSession
          ? (user.friends.find(friend => req.session.user.id === friend.friendId)) : false,
      };
      if (status === 200) {
        res.render('users/show', viewFields);
      } else if (status >= 400) {
        res.redirect('/error');
      }
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { status, response: user } = await User.get(req.params.userId);
      if (req.session.user.id === user.id) {
        res.render('users/edit', user);
      } else {
        const error = {
          status: 403,
          message: 'You don\'t have permission to do this.',
        };
        throw error;
      }
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { status, response: user } = await User.update({
        id: req.params.userId,
        ...req.body.user,
      },
      req.cookies[`${process.env.COOKIE_NAME}`]);
      res.redirect(`${req.params.userId}`);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    let deleted;

    try {
      deleted = await User.delete(req.params.userId);
      res.redirect('/logout');
    } catch (error) {
      next(error);
    }
  }

  static async createFriendship(req, res, next) {
    try {
      await User.createFriendship(req.params.userId, req.cookies[`${process.env.COOKIE_NAME}`]);
      res.redirect(`/users/${req.params.userId}`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersController;
