const { Router } = require('express');

const router = Router();

// Test
router.get('/', (req, res) => {
  res.render('search', {
    posts: [ {
      title: 'Title',
    },
    ],
  });
});

module.exports = router;
