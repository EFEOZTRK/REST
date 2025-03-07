const express = require("express");
const router = express.Router();
const userDeleteController = require("../controllers/delete-user-controller");

router.post("/home/delete-user",userDeleteController.deleteUser);


module.exports = router;