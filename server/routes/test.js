const router = require("express").Router();

const {test} = require("../controllers");

router.get("/test", test.index);
router.get("/reviewTest", test.review);

module.exports = router;