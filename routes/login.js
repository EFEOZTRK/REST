const express = require("express");
const bcrypt = require("bcrypt");
const loginController = require("../controllers/login-controller")

const router = express.Router();

router.get("/login", (req,res)=>{
    res.render("login",{ loginError: ""});
})


router.post("/login",loginController.loginUser)


module.exports = router;

