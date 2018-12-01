const { Router } = require('express');
const { PostsController } = require('../controllers');
const { isLoggedIn } = require('../middlewares');

const router = Router();

// INDEX Post
router.get('/', PostsController.getAll);

// CREATE Post view
router.get('/new', [isLoggedIn], (req, res) => {
  res.render('posts/new');
});

// NEW Post
router.post('/', [isLoggedIn], PostsController.insert);

// SHOW Post view
router.get('/:postId', PostsController.get);

// EDIT Post view
router.get('/:postId/edit', [isLoggedIn], PostsController.edit);

// UPDATE Post
router.put('/:postId', [isLoggedIn], PostsController.update);

// DESTROY Post
router.delete('/:postId', [isLoggedIn], PostsController.delete);

module.exports = router;
