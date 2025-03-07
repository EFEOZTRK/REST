const express = require("express");
const router = express.Router();
const downloadController = require("../controllers/download-controller");


router.post("/home/download",downloadController.downloadItem);

module.exports = router;