const express = require("express");
const router = express.Router();

// @route   GET api/user request
//@desc     Test route
//access    Public

router.get("/", (req, res) => res.send("User Route"));

module.exports = router;
