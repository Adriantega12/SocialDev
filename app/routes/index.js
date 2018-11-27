const { Router } = require('express');

const router = Router();

// Test
router.get('/', (req, res) => {
  res.sendFile('../index.html');
});

module.exports = router;
