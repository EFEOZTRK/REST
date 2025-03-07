const mongoose  = require("mongoose");

const userSchemas = mongoose.Schema({
    username : {type: String, unique: true},
    password : String,
    email : {type: String, unique: true,sparse: true},
    adress : String,
    name: String,
    surname : String
})



const userSchema = new mongoose.model("userSchema", userSchemas);
module.exports = userSchema;
