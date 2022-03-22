const router = require('express').Router();
const {comments} = require('../controllers');

router.post('/:rid', comments.create);
router.put('/:rid/:cid', comments.update);
router.delete('/:rid/:cid', comments.destroy);

module.exports = router;