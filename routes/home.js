const express = require("express")
const router = express.Router();
const showItemsController = require("../controllers/show-items-controller");


router.get("/home",showItemsController.showItems);

module.exports = router;