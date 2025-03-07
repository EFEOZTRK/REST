const itemSchema = require("../models/items");

const showItems = async (req, res) => {

    try {

        if (req.session.username) {
            const username = req.session.username;
            const selectItem = await itemSchema.find();
            res.render("home", { items: selectItem, username: req.session.username })
            console.log(`Items are shown , logged user : ${username}`);

        } else {
            res.render("home", { items: [], username: "Guest" });
            console.log("Items didnt gathered since user logged in as Guest");

        }



    }
    catch (err) {
        console.log("There has been an error showing items");

    }

}


module.exports = {
    showItems,
}