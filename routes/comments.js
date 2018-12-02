const { Router } = require('express');
const { CommentsController } = require('../controllers');

const router = Router({ mergeParams: true });

// INDEX Comment
router.get('/', CommentsController.getAll);

// NEW Comment
router.post('/', CommentsController.insert);

// SHOW Comment
router.get('/:commentId', CommentsController.get);

// UPDATE Comment
router.put('/:commentId', CommentsController.update);

// DESTROY Comment
router.delete('/:commentId', CommentsController.delete);

module.exports = router;
