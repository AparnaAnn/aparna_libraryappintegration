const express = require("express");
const updateRouter = express.Router();
const Bookdata = require("../model/Bookdata");
const Authordata = require("../model/Authordata");

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


function router(nav) {
  updateRouter.get("/book/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.render("bookupdateform", {
        nav,
        title: "Update",
        book,
      });
    });
  });
  updateRouter.get("/author/:id", function (req, res) {
    const id = req.params.id;
    Authordata.findOne({ _id: id }).then(function (author) {
      res.render("authorupdateform", {
        nav,
        title: "Update",
        author,
      });
    });
  });
  updateRouter.post("/book/:id/updated", store.single('image'), function (req, res) {
    const id = req.params.id;
    var newbook = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      description: req.body.description,
      image: req.file.filename
    };
    Bookdata.updateOne({ _id: id }, { $set: newbook }, function () {
      res.redirect("/books");
    });
  });
  updateRouter.post("/author/:id/updated", store.single('image'), function (req, res) {
    const id = req.params.id;
    var newauthor = {
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename
    };
    Authordata.updateOne({ _id: id }, { $set: newauthor }, function () {
      res.redirect("/authors");
    });
  });
  return updateRouter;
}

module.exports = router;