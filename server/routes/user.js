const router = require('express').Router();
const {user} = require('../controllers');

router.get('/', user.index);
router.get('/:id', user.show);
router.put('/:id', user.update);
router.delete('/:id', user.destroy);

module.exports = router;