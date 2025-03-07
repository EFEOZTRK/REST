const express = require("express");
const itemSchema = require("../models/items");
const router = express.Router();


router.post("/home/edit", (req,res)=>{
    const {itemDescription} = req.body;
    console.log(itemDescription);
    
    res.redirect(`/home/edit-form?itemDescription=${itemDescription}`)
})


module.exports = router;