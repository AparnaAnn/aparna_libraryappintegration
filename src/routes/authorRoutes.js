const express = require("express");
const authorsRouter = express.Router();
var Authordata = require('../model/Authordata')
function router(nav){

// var authors = [
//     {
//         author : "Joseph Barbera",
//         book : "Tom and Jerry",
//         genre : "Cartoon",
//         img : "joseph barbera.jpg",
//         about : "Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.He was the co-founder of the company Hanna-Barbera, with his longtime partner William Hanna. Barbera was born in an Italian-American family."
//     },
//     {
//         author : "J K Rowling",
//         book : "Harry Potter",
//         genre : "Fanstasy Fiction",
//         img : "jk.jpg",
//         about : "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter.J.K. Rowling first had the idea for Harry Potter while delayed on a train travelling from Manchester to London King’s Cross in 1990. Over the next five years, she began to plan out the seven books of the series. She wrote mostly in longhand and amassed a mountain of notes, many of which were on scraps of paper."
//     },
//     {
//         author : "Stephenie Meyer",
//         book :"Twilight",
//         genre : "Fantasy Fiction",
//         img : "sm.jpg",
//         about : "Stephenie Meyer (/ˈmaɪ.ər/; née Morgan; born December 24, 1973) is an American novelist. She is best known for writing the vampire romance series Twilight, which has sold over 100 million copies, with translations into 37 different languages. Meyer was the bestselling author of 2008 and 2009 in the U.S., having sold over 29 million books in 2008, and 26.5 million in 2009. Meyer received the 2009 Children's Book of the Year award from the British Book Awards for Breaking Dawn, the Twilight series finale."
//     }
// ]
authorsRouter.get('/',function(req,res){
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