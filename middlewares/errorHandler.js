function errorHandler(err, req, res, next) {
  console.error('Error handler', err);
  return res.redirect('/error');
}

module.exports = errorHandler;
