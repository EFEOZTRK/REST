const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require("mongoose");
const {body,validationResult} = require("express-validator")
const session = require("express-session");
const bcrypt = require("bcrypt");
const stripe = require("stripe")
// ROUTE IMPORTS //

const RegisterRoute = require("./routes/register");
const LoginRoute = require("./routes/login");
const HomeRoute = require("./routes/home");
const AddItemsRoute = require("./routes/add-items");
const LogOutRoute = require("./routes/logout");
const ItemDeleteRoute = require("./routes/delete-item");
const ItemEditRoute = require("./routes/edit-items");
const EditItemsForm = require("./routes/edit-items-form");
const BidRoute = require("./routes/bid");
const ProfileRoute = require("./routes/profile");
const UserDeleteRoute = require("./routes/delete-user");
const DownloadRoute = require("./routes/home-download");
const StripeRoute = require("./routes/home-buy");
const PaymentRoute = require("./routes/payment");




app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({
    secret: "Very secret key ",
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge: 24 * 60 * 60 * 1000,
    }

}))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connection successfull!");
    
})
.catch((err)=>{
    console.log(err,"Database connection failed!");
    
})

app.use(RegisterRoute);
app.use(LoginRoute);
app.use(HomeRoute);
app.use(AddItemsRoute);
app.use(LogOutRoute);
app.use(ItemDeleteRoute);
app.use(ItemEditRoute);
app.use(EditItemsForm);
app.use(BidRoute);
app.use(ProfileRoute);
app.use(UserDeleteRoute);
app.use(DownloadRoute);
app.use(StripeRoute);
app.use(PaymentRoute);



const port = 3000;
app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}/register`);    
})

