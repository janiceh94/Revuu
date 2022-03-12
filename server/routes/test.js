const router = require("express").Router();

const {test} = require("../controllers");

router.get("/test", test.index);

module.exports = router;