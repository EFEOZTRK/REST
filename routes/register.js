const express = require("express")
const {body} = require("express-validator");
const registerController = require("../controllers/register-controller")

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended: true}))


router.get("/register", (req,res)=>{
    
    res.render("register",{errors : {}, userExists: ""});

})
router.post("/register", 
    body("username")
    .isLength({min: 5}).withMessage("Username should be atleast 5 characters!")
    .isAlphanumeric().withMessage("Username can't contain special characters!"),
    body("password")
    .isLength({min: 5}).withMessage("Password should have atleast 5 characters!"),
    
    registerController.registerUser
)

module.exports = router