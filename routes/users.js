const { Router } = require('express');
const { UsersController } = require('../controllers');
const { Auth } = require('../middlewares');

const router = Router();

// CREATE User view
router.get('/new', (req, res) => {
  res.redirect('/register');
});

// SHOW User
router.get('/:userId', UsersController.get);

// EDIT User view
router.get('/:userId/edit', Auth.requireSession, UsersController.edit);

// UPDATE User
router.put('/:userId', Auth.requireSession, UsersController.update);

// DESTROY User
router.delete('/:userId', Auth.requireSession, UsersController.delete);

// Friends
router.post('/:userId/friends', Auth.requireSession, UsersController.createFriendship);

module.exports = router;
