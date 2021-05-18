const express = require("express");
const signupRouter = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../model/User');
const bcrypt = require('bcryptjs');


function router(nav){
    
    
    signupRouter.get("/",(req,res)=>{
       
        res.render("signup",
        {
            nav,
            title : "SignUp",
            error:""
        });
    });

    signupRouter.post("/",async(req,res)=>{
        const { username, email, password} = req.body;
        let user = await UserModel.findOne({email});
        if(user){
             
            
            return res.render("signup",
            {
                nav,
                title : "SignUp",
                error:"!User already exists!"
            });
        
        }
        
        const hashedPsw = await bcrypt.hash(password,12);

        user = new UserModel({
            username,
            email,
            password:hashedPsw
        });
        await user.save();

        return res.render("login",
            {
                nav,
                title : "SignUp",
                error:"!SignUp Successful, please log in to continue!"
            });
        

    });

    return signupRouter;
};

module.exports = router;