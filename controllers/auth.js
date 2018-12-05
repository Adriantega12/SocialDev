const api = require('../api');

class AuthController {
  static async register(req, res, next) {
    try {
      const { status, response } = await api.insert('auth/register/', req.body.user);
      if (status === 201) {
        res.send(response);
      } else if (status === 409) {
        res.redirect('/error');
      }
    } catch (error) {
      next(error);
    }
  }

  static async confirm(req, res, next) {
    try {
      const { status, response } = await api.get('auth/register', req.params.token);
      if (status === 202) {
        const { user, token } = response.data;
        res.cookie(process.env.COOKIE_NAME, token.token);
        res.redirect(`/users/${user.id}/edit`);
      }
    } catch (error) {
      next(error);
    }
  }

  static async recover(req, res, next) {

  }

  static async login(req, res, next) {
    try {
      const { status, response } = await api.login(req.body.email, req.body.password);
      if (status === 303) { // Succesfully logged in
        res.cookie(process.env.COOKIE_NAME, response.token.token);
        res.redirect('/home');
      } else if (status === 400) { // Wrong credentials, try again
        res.redirect('/login');
      }
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {
    res.clearCookie(process.env.COOKIE_NAME);
    res.redirect('/users');
  }
}

module.exports = AuthController;
