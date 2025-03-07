const express = require("express")
const router = express.Router();
const bidController = require("../controllers/bid-controller");

router.post("/home/bid",bidController.getBid);


module.exports = router;