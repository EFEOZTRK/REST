
const itemSchema = require("../models/items")

const addItems = async (req,res) =>{
    try{
        const {itemPrice,itemDescription,itemName} = req.body
        const newItem = itemSchema(req.body);
        await newItem.save();
        console.log("Item inserted !");
        res.redirect("/home")
        

    }
    catch(err){
        console.log("Error inserting item", err);
        
    }
}

module.exports = {
    addItems,
}




