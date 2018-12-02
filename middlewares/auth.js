const api = require('../api');

class Auth {
  static async getCurrentSession(req, res, next) {
    req.session = {};
    res.locals.API_HOST = process.env.API_HOST; // Needs to be moved to app.locals eventually
    res.locals.CLIENT_HOST = process.env.CLIENT_HOST;

    try {
      const { status, response } = await api.activeSession(req.cookies[`${process.env.COOKIE_NAME}`]);
      if (status === 303) {
        req.session.user = {
          id: response.userId,
        };
        res.locals.ppPath = response.ppPath;
        res.locals.hasSession = true;
        res.locals.sessionUserId = response.userId;
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
