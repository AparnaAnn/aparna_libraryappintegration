const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@cluster0.xb7wm.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
     
    name:String,
    description:String,
    image:String
});

var AuthorData = mongoose.model('authordata',AuthorSchema);

module.exports = AuthorData;