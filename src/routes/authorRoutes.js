const express = require("express");
const authorsRouter = express.Router();
var Authordata = require('../model/Authordata')
const isAuth= (req,res,next)=>{
    if(req.session.isAuth){
        next()
    }
    else{
        res.redirect('/login');
    }
}
function router(nav){

authorsRouter.get('/',isAuth,(req,res)=>{
    Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
                nav,
                title:'Library',
                authors
            }
            );

        })
});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
                });
            })

});
return authorsRouter;
}
module.exports = router;