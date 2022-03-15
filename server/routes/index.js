const router = require('express').Router();

router.use('/', require('./test'));
router.use('/auth', require('./auth'));
router.use('/review', require('./review'));

module.exports = router;