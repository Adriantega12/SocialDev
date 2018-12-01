const api = require('../api');

class AuthController {
  static async register(req, res, next) {

  }

  static async recover(req, res, next) {

  }

  static async login(req, res, next) {
     try {
      const { status, response } = await api.login(req.body.email, req.body.password);
      if (status === 303) { // Succesfully logged in
        res.cookie(process.env.COOKIE_NAME, response.token.token);
        res.redirect('/users');
      } else if (status === 400) { // Wrong credentials, try again
        res.redirect('/login');
      }
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {

  }
}

module.exports = AuthController;
