const express = require("express");
const router = express.Router();
const profileGetController = require("../controllers/profile-controller");


router.get("/home/profile",profileGetController.profileGet);

router.post("/home/profile",profileGetController.profilePost);


module.exports = router;