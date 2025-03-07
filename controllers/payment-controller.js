
const paymentConfirmed = (req,res) =>{
    res.render("success");
}
const paymentCanceled = (req,res) =>{
    res.render("cancel");
}

module.exports = {
    paymentConfirmed,
    paymentCanceled,
}