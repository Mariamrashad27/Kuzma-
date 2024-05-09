const express = require('express');
const router = express.Router();
const { signup,
        login,
        profile,
        forgotPassword,
        verifyPasswordCode,
        resetPassword } = require('../controllers/authController');
const { signUpValidator, logInValidator } = require('../validators/authValidator');

router.post("/signup",signup);
router.post("/login", login)

router.get("/profile/:id",profile);
router.route("/forgotPassword")
.post(forgotPassword)

router.route("/verifyResetCode")
.post(verifyPasswordCode)

router.route("/resetPassword")
.put(resetPassword);

module.exports = router;
