const userSchema = require("../models/users");
const bcrypt = require("bcrypt")

const loginUser = async (req,res) =>{
    try{


        const {username,password} = req.body;
        

        if(!username || !password){
            res.render("login", { loginError: "Please enter both credentials"});
        }

        const getPassword = await userSchema.findOne({username});

        if(!getPassword){
            res.render("login",{ loginError: "Username or Password incorrect"})
        }

        
        const matchPassword = await bcrypt.compare(password,getPassword.password);

        if(matchPassword){
            req.session.username = username
            res.redirect("/home");
            console.log("Password matched!");
            
        }
        
        if(!matchPassword){
            res.render("login", { loginError: "Username or Password incorrect"});
        }


    }

    catch(err){

        console.log("There has been an error in database");
        

    }



 }
 module.exports = {
    loginUser,
 }