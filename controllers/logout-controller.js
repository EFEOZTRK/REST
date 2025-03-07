
const logOut = async (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("Error destroying session");
            
        }else{
            console.log("Logout successfull !");
            res.clearCookie("connect.sid")
            res.redirect("/login")
        }
    })
}

module.exports = {
    logOut,
}