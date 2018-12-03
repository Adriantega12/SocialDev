const { Router } = require('express');
const { PostsController } = require('../controllers');

const router = Router();

const authRoutes = require('./auth');
const usersRoutes = require('./users');
const postsRoutes = require('./posts');

router.use('/', authRoutes);

router.use('/network', PostsController.getNetworkFeed);

router.use('/users', usersRoutes);

router.use('/posts', postsRoutes);

router.get('/error', (req, res) => {
  res.render('error');
});

module.exports = router;
