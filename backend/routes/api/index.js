const express = require("express");
const signupController = require("../../controller/signupController");
const loginController = require("../../controller/loginController");
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
module.exports = router;
