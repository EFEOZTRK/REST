const itemSchema = require("../models/items");


const formGet = async (req,res) => {
    try{
        const itemDescription = req.query.itemDescription ;   
    
        const itemPlaceHolder = await itemSchema.findOne({itemDescription});
    
        res.render("editItems",{name: itemPlaceHolder.itemName, description: itemPlaceHolder.itemDescription, price: itemPlaceHolder.itemPrice});
        
        console.log("Form rendered successfully!");
        
        }
        catch(err){
            console.log("Form page failed");
            
        }
}

const formPost = async (req,res) => {
    try{
        const {unchangedDescription} = req.body
        const {itemPrice,itemName,itemDescription} = req.body;
         await itemSchema.updateOne({itemDescription: unchangedDescription},{$set:{itemPrice,itemDescription,itemName}});
        console.log("Items updated!");
        res.redirect("/home");
        


    }
    catch(err){

        console.log("Error updating item");
        

    }
}

module.exports = {
    formGet,
    formPost
}