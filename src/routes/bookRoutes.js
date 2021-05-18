const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

 const isAuth= (req,res,next)=>{
     if(req.session.isAuth){
         next()
     }
     else{
         res.redirect('/login');
     }
 }
function router(nav){
    
    
    booksRouter.get('/',isAuth,(req,res)=>{
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Library',
                books
            }
            );

        })
       
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
                });
            })
       
    });

    return booksRouter;
}


module.exports = router;