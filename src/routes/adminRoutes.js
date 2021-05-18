const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../model/Bookdata");
const AuthorData = require("../model/Authordata");

const isAuth= (req,res,next)=>{
    if(req.session.isAuth){
        next()
    }
    else{
        res.redirect('/login');
    }
}

//file storage
const multer = require('multer');


//specify location to save images(multer)
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'public/images');
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + file.originalname);
    }
});

//storage varaible
const store = multer({storage:storage});

function router(nav){
    adminRouter.get('/addBookPage',function(req,res){
        res.render('addBook',{
        nav,
        title:'Add Book'
        });
    });

    //route for hadnling add book request
    adminRouter.post('/addbook',store.single('image'),function(req,res){
        var item = {

            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            image: req.file.filename
        }
        var book = Bookdata(item);
        book.save(); //saving to database
        res.redirect('/books');
        
        
    });

    adminRouter.get('/addAuthorPage', isAuth,(req,res)=>{
        res.render('addAuthor',{
        nav,
        title:'Add Author'
        });
    });

    //route for hadnling add author request
    adminRouter.post('/addauthor',store.single('image'),function(req,res){
        var item = {

            name:req.body.name,
            description:req.body.description,
            image:req.file.filename
        }
        var author = AuthorData(item);
        author.save(); //saving to database
        res.redirect('/authors');
        
        
    });

    //route for handling book delete request
    adminRouter.post('/deleteBook/:id',async (req,res)=>{
        await Bookdata.findByIdAndDelete({_id:req.params.id});
        res.redirect('/books');
    });

    //route for handling author delete request
    adminRouter.post('/deleteAuthor/:id',async (req,res)=>{
        await AuthorData.findByIdAndDelete({_id:req.params.id});
        res.redirect('/authors');
    });

    return adminRouter;
}

module.exports = router;
