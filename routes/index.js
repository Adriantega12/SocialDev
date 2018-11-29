const { Router } = require('express');

const router = Router();

const postsRoutes = require('./posts');

router.use('/posts', postsRoutes);

module.exports = router;
