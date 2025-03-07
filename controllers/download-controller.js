const itemSchema = require("../models/items");

const downloadItem = async (req,res) =>{
    try{
        const {itemName} = req.body;

        const item = await itemSchema.findOne({itemName});
        if(!item){
            console.log("No such item");
            
        }

        const data  = `Item Name: ${item.itemName}, Description: ${item.itemDescription}, Current bid from : ${item.itemPrice}`;

        res.setHeader("Content-Disposition",`attachment; filename= "${item.itemName}.txt"`)
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
        console.log("Item description downloaded!");
        
    }

    catch(err){

        console.log("Item download failed !");
        

    }
}
module.exports = {
    downloadItem,
}