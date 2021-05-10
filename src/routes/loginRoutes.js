const express = require("express");
const loginRouter = express.Router();


function router(nav){

    
    loginRouter.get("/",(req,res)=>{
        res.render("login",
        {
            nav,
            title : "LogIn",
        });
    });

    return loginRouter;
}


module.exports = router;