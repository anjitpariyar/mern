const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// @route   Post api/user request
//@desc     Register User
//access    Public

router.post(
  "/",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please add valide Email").isEmail(),
    body("password", "add strong password you dumbass").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send("User Route");
  }
);

module.exports = router;
