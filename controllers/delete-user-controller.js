const session = require("express-session");
const userSchema = require("../models/users");

const deleteUser = async (req,res) => {
    try{
        const {username} = req.body;
        const findUser = await userSchema.deleteOne({username});
        res.clearCookie("connect.sid")
        console.log("User deleted successfully");
        res.render("login",{loginError: "User deleted!"})
        res.redirect("/login")
        
        
    }
    catch(err){
        console.log("Error deleting user");
        
    }
}

module.exports = {
    deleteUser,
}