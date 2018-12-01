const api = require('../api');

async function isLoggedIn(req, res, next) {
  try {
    const { status, response } = await api.activeSession(req.cookies[`${process.env.COOKIE_NAME}`]);
    req.session = {
      user: {
        id: response.userId,
      },
    };
    if (status === 303) { // Redirect
      next();
    } else if (status === 401) {
      throw next({
        message: 'User needs to log in first',
        status,
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isLoggedIn;
