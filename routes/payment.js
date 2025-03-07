const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment-controller")


router.get("/home/success",paymentController.paymentConfirmed);
router.get("/home/cancel",paymentController.paymentCanceled);

module.exports = router;