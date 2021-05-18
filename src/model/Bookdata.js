const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@cluster0.xb7wm.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
     
    title: String,
    author: String,
    genre: String,
    description: String,
    image: String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;