const router = require('express').Router();
const {review} = require('../controllers');

router.get('/', review.index);
router.get('/userindex/:id', review.userIndex); 
router.get('/:id', review.show);
router.post('/', review.create);
router.put('/:id', review.update);
router.delete('/:id', review.destroy);

module.exports = router;