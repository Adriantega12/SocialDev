function errorHandler(err, req, res, next) {
  console.error('Error handler', err);
  return res.status(err.status || 500).render('error', { err });
}

module.exports = errorHandler;
