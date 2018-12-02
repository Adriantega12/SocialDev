const { Router } = require('express');
const { PostsController } = require('../controllers');
const { Auth } = require('../middlewares');
const commentsRoutes = require('./comments');

const router = Router();

// INDEX Post
router.get('/', PostsController.getAll);

// CREATE Post view
router.get('/new', Auth.requireSession, (req, res) => {
  res.render('posts/new');
});

// NEW Post
router.post('/', Auth.requireSession, PostsController.insert);

// SHOW Post view
router.get('/:postId', PostsController.get);

// EDIT Post view
router.get('/:postId/edit', Auth.requireSession, PostsController.edit);

// UPDATE Post
router.put('/:postId', Auth.requireSession, PostsController.update);

// DESTROY Post
router.delete('/:postId', Auth.requireSession, PostsController.delete);

// Comments routes
router.use('/:postId/comments', commentsRoutes);

module.exports = router;
