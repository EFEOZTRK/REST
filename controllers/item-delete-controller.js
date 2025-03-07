const itemSchema = require("../models/items");

const deleteItems = async (req,res) =>{
    try{
        const {itemDescription} = req.body;
        await itemSchema.deleteOne({itemDescription});
        console.log("Item deleted successfully!");
        res.redirect("/home")
        

    }
    catch(err){
        console.log("Error deleting item!");
        
    }
}

module.exports = {
    deleteItems,
}