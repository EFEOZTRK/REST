const express = require("express");
const router = express.Router();
const stripeCheckout = require("../controllers/stripe-checkout");

router.post("/home/buy",stripeCheckout.buyItem);

module.exports = router