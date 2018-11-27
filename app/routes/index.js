const { Router } = require('express');

const router = Router();

// Test
router.get('/', (req, res) => {
  res.send('Principal');
});

module.exports = router;
