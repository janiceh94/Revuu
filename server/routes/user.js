const router = require('express').Router();
const {user} = require('../controllers');
const authRequired = require("../middleware/auth.required")


router.get('/', user.index);
//router.get('/:id', user.show); 
router.put('/:id', user.update);
router.delete('/:id', user.destroy);
//router.get("/profile/:id", authRequired, user.getProfile)
router.get("/profile/:id", user.getProfile)

module.exports = router;