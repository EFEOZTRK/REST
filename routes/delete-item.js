const express = require("express");
const router = express.Router();
const deleteItemController = require("../controllers/item-delete-controller");

router.post("/home/delete",deleteItemController.deleteItems);

module.exports = router;