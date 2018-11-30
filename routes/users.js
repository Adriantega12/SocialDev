const { Router } = require('express');
const { UsersController } = require('../controllers');

const router = Router();

// INDEX User
router.get('/', UsersController.getAll);

// CREATE User view
router.get('/new', (req, res) => {
  res.render('users/new');
});

// NEW User
router.post('/', UsersController.insert);

// SHOW User
router.get('/:userId', UsersController.get);

// EDIT User view
router.get('/:userId/edit', UsersController.edit);

// UPDATE User
router.put('/:userId', UsersController.update);

// DESTROY User
router.delete('/:userId', UsersController.delete);

module.exports = router;
