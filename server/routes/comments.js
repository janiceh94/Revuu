const router = require('express').Router();
const {comments} = require('../controllers');

router.get('/', comments.showAll);
router.get('/:id', comments.showOne);
router.post('/', comments.create);
router.put('/:id', comments.update);
router.delete('/:id', comments.destroy);

module.exports = router;