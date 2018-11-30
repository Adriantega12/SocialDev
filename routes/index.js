const { Router } = require('express');

const router = Router();

const postsRoutes = require('./posts');

router.use('/posts', postsRoutes);

router.get('/error', (req, res) => {
  res.render('error', { status: req.status });
});

module.exports = router;
