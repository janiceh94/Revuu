const router = require('express').Router();
const {comments} = require('../controllers');

// router.get('/', comments.showAll);
// router.get('/:id', comments.showOne);
router.post('/:rid', comments.create);
router.put('/:rid/:cid', comments.update);
router.delete('/:rid/:cid', comments.destroy);

module.exports = router;