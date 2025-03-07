const express = require("express")
const router = express.Router();
const itemController = require("../controllers/item-controller");



router.get("/home/additems", (req,res)=>{
    res.render("addItems");
})

router.post("/home/additems",itemController.addItems)

module.exports = router;