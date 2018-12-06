const { Router } = require('express');
const { AuthController } = require('../controllers');

const router = Router();

// Register user view
router.get('/register', (req, res) => {
  res.render('auth/sign-up');
});

// Register user
router.post('/register', AuthController.register);

// Confirm user
router.get('/register/:token', AuthController.confirm);

// Recover password view
router.get('/recover', (req, res) => {

});

// Recover password
router.post('/recover', AuthController.recover);

// Login user view
router.get('/login', (req, res) => {
  res.render('auth/sign-in');
});

// Login user
router.post('/login', AuthController.login);

// Logout user
router.get('/logout', AuthController.logout);

module.exports = router;
