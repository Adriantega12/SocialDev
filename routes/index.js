const { Router } = require('express');

const router = Router();

// Test
router.get('/', (req, res) => {
  res.render('post', {
    comments: [ {
      author: 'Hey',
    },
    {
      author: 'You',
    },
    {
      author: 'You',
    },
    ],
  });
});

module.exports = router;
