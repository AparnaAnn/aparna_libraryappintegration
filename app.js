const express = require("express");
const app = new express();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const mongoose = require("mongoose");


const mongoURI='mongodb://localhost:27017/library'


mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})

.then((res) =>{
    console.log("mongodb connected");
});

const store = new MongoDBSession({
    uri: mongoURI,
    collection: 'mySessions',
});
const port = process.env.PORT || 1978;


const nav =  [
    {
        link :'/books',name :'Books'
    },
    {
        link :'/authors',name:'Authors'
    },
    
    {
        link : "/admin/addBookPage",
        name : "Add Book "

    },
    {
        link : "/admin/addAuthorPage",
        name : "Add Author "

    },
    
    {
        link : "/signup",
        name : "SignUp/Login"
    }
    
    

];
app.use(express.urlencoded({extended:true}));
app.use(session({

    secret: 'key that will sign cookie',
    resave: false,
    saveUninitialized: false,
    store: store,
    })
);



const booksRouter = require('./src/routes/bookRoutes')(nav,);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const signupRouter = require("./src/routes/signupRoutes")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);
const updateRouter = require("./src/routes/updateroute")(nav);






app.use(express.static(__dirname+ '/public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/update',updateRouter);




app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    }
    );
});




app.listen(port,()=>{console.log("server Ready at " + port)});



