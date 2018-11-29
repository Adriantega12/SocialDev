const { Router } = require('express');
const { PostsController } = require('../controllers');

const router = Router();

// INDEX Post
router.get('/', PostsController.getAll);

// CREATE Post view
router.get('/new', (req, res) => {
  res.render('newPost');
});

// NEW Post
router.post('/', PostsController.insert);

// SHOW Post
router.get('/:postId', PostsController.get);

// UPDATE Post
router.put('/:postId', PostsController.update);

// DESTROY Post
router.delete('/:postId', PostsController.delete);

module.exports = router;
