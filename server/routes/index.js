const router = require('express').Router();

router.use('/', require('./test'));
router.use('/auth', require('./auth'));

module.exports = router;