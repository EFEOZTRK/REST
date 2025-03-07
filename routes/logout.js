const express = require("express");
const router = express.Router();
const logOutController = require("../controllers/logout-controller")

router.post("/logout",logOutController.logOut )

module.exports = router;