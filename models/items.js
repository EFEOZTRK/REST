const mongoose  = require("mongoose");

const items =  mongoose.Schema({
    itemName: String,
    itemDescription: String,
    itemPrice: Number,
    // addedBy : String,
})


const itemSchema = new mongoose.model("itemSchema", items);
module.exports = itemSchema;