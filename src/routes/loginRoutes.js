const express = require("express");
const loginRouter = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../model/User');
const bcrypt = require('bcryptjs');



function router(nav){

    
    loginRouter.get("/",(req,res)=>{
        res.render("login",
        {
            nav,
            title : "LogIn",
        });
    });

    loginRouter.post("/",async(req,res)=>{
        const { username, password} = req.body;


        const user = await UserModel.findOne({username});
        if(!user){
            return res.redirect('/login');

        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.redirect('/login')
        }

       req.session.isAuth =true;
       res.redirect('/books');
        
       
    });

    return loginRouter;
}


   

module.exports = router;