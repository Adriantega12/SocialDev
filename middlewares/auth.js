const api = require('../api');

class Auth {
  static async getCurrentSession(req, res, next) {
    req.session = {};

    try {
      const { status, response } = await api.activeSession(req.cookies[`${process.env.COOKIE_NAME}`]);
      if (status === 303) {
        req.session.user = {
          id: response.userId,
        };
        res.locals.ppPath = response.ppPath;
        res.locals.hasSession = true;
        res.locals.sessionUserId = response.userId;
      } else if (status === 401) {
        res.locals.hasSession = false;
      }
      // console.log(req.originalUrl);
    } catch (error) {
      next(error);
    }

    next();
  }

  static requireSession(req, res, next) {
    if (!res.locals.hasSession) {
      next({ message: 'Needs to be logged in to perform this action.' });
    } else {
      next();
    }
  }
}

module.exports = Auth;
