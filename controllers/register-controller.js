const bcrypt = require("bcrypt");
const userSchema = require("../models/users");
const {validationResult} = require("express-validator")


const registerUser = async (req,res) => {
    const errors = validationResult(req);
    const errObj = {}
    
    

    try{
        if(!errors.isEmpty()){
            errors.array().forEach(err =>{
                errObj[err.path] = err.msg;
            })
    
            res.render("register", {errors : errObj, userExists: ""})
    
        }else{
            const {username,password} = req.body

        const hashedPassword = await bcrypt.hash(password,10);

        const checkUser = await userSchema.findOne({username});

        if(checkUser){
            res.render("register",{errors: {}, userExists: "This username is taken",} )
        }

        const addUser = new userSchema({username,password : hashedPassword})
        await addUser.save()

        res.redirect("/login")

        }

        


    }
    catch(err){
        console.log(err);
        res.status(500)
        
    }
}

module.exports = {
    registerUser,
}