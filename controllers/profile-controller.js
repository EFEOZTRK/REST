const express = require("express");
const userSchema = require("../models/users");
const { cookie } = require("express-validator");
const session = require("express-session");
const router = express.Router();
const bcrypt = require("bcrypt");


const profileGet = async (req,res) => {
    try{
        username = req.session.username;
        

        const selectUser = await userSchema.findOne({username});
        
        res.render("profile",{
            username: selectUser.username,
            email: selectUser.email,
            address: selectUser.adress,
            name: selectUser.name,
            surname: selectUser.surname,
        })
        console.log("Showing profile information");
        

    }
    catch(err){
        console.log("Error getting profile information !");
        
        

    }
}


const profilePost = async (req,res) => {
    try{
        const { username, password ,email, adress, name, surname } = req.body;
       
        
        

        if(password){
             const hashedPassword = await bcrypt.hash(password,10);
            await userSchema.updateOne({username},{$set:{password : hashedPassword}});
            console.log("Password changed");
            
        }

        await userSchema.updateOne({username}, {$set:{
            email ,
            adress,
            name ,
            surname
        }})
        
        res.redirect("/home/profile")
        console.log("Profile data changed successfully");
        

    }
    catch(err){
        console.log("Profile data change Error !");
        

    }
}





module.exports = {
    profileGet,
    profilePost
}