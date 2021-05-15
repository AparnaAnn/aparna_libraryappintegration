const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
     
    name:String,
    description:String,
    image:String
});

var AuthorData = mongoose.model('authordata',AuthorSchema);

module.exports = AuthorData;