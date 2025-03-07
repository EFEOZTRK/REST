const itemSchema = require("../models/items");

const getBid = async (req,res) =>{
    try{
        const {itemPrice,itemDescription} = req.body;
        await itemSchema.updateOne({itemDescription},{$set:{itemPrice}});
        res.redirect("/home");
        console.log("Item price updated");
        

    }
    catch(err){
        console.log("Item price could not update");
        

    }
}

module.exports = {
    getBid,
}