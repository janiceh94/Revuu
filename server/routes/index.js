const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/comments', require('./comments'));
router.use('/review', require('./review'));
router.use('/user', require('./user'));

module.exports = router;