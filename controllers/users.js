const { User } = require('../models');

class UsersController {
  static async getAll(req, res, next) {
    res.send('This was supposed to be a put');
  }

  static async get(req, res, next) {
    try {
      const { status, response: user } = await User.get(req.params.userId);
      if (status === 200) {
        res.render('users/show', { API_HOST: process.env.API_HOST, ...user });
      } else if (status >= 400) {
        res.redirect('/error');
      }
    } catch (error) {
      next(error);
    }
  }

  static async insert(req, res, next) {
    let newUser;

    try {
      newUser = await User.insert(req.body);
      res.redirect(`users/${newUser.id}`);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    let user;

    try {
      user = await User.get(req.params.userId);
      res.render('users/edit', user);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    res.send(req.body.post);
  }

  static async delete(req, res, next) {
    let deleted;

    try {
      deleted = await User.delete(req.params.postId);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersController;
