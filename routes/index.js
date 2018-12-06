const { Router } = require('express');
const { PostsController } = require('../controllers');
const { Auth } = require('../middlewares');

const router = Router();

const authRoutes = require('./auth');
const usersRoutes = require('./users');
const postsRoutes = require('./posts');

router.get('/', (req, res) => {
  res.render('index');
});

router.use('/', authRoutes);

router.use('/network', PostsController.getNetworkFeed);

router.use('/home', Auth.requireSession, PostsController.getHomeFeed);

router.use('/users', usersRoutes);

router.use('/posts', postsRoutes);

router.get('/error', (req, res) => {
  res.render('error');
});

module.exports = router;
