const mongoose = require("mongoose");

//connection creation and creating a new db.
mongoose.connect("mongodb://localhost:27017/ketan",{useNewUrlParser:true ,
 useunifiedTopology:true} ).then(() => console.log("connection successfull.."))
 .catch((err) => console.log(err));

 //schema
 //mongoose schema defines the structure of the document
 //default values,validators etc.

const playlistSchema =  new mongoose.Schema({
    name: { 
        type: String,
        required : true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type:Date,
        default:Date.now 
    }
})

/*
A Mongoose model is wrapper on the mongoose schema.
A Mongoose schema defines the structure of the document,
default values, validators , etc. whereas a Mongoose model provides and interface to the 
database for creating, querying ,updating,deleting records etc. 
*/

//collection creation
const Playlist = new mongoose.model("Playlist",playlistSchema);

