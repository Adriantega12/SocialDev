const { Router } = require('express');
const multer = require('multer');
const { UsersController } = require('../controllers');
const { Auth } = require('../middlewares');

const router = Router();
const upload = multer({ dest: 'tmp/' });

// INDEX User
router.get('/', UsersController.getAll);

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

// router.put('/:userId/upload', upload.single('profilePic'), Auth.requireSession, UsersController.upload);

// DESTROY User
router.delete('/:userId', Auth.requireSession, UsersController.delete);

// Friends
router.post('/:userId/friends', Auth.requireSession, UsersController.createFriendship);

module.exports = router;
