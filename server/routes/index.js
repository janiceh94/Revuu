const router = require('express').Router();

router.use('/', require('./test'));
router.use('/auth', require('./auth'));
router.use('/comments', require('./comments'));


module.exports = router;