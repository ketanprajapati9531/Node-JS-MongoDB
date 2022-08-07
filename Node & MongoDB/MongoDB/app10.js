const mongoose = require("mongoose");

//connection creation and creating a new db.
mongoose.connect("mongodb://localhost:27017/ketan",{useNewUrlParser:true ,
 useunifiedTopology:true} ).then(() => console.log("connection successfull.."))
 .catch((err) => console.log(err));
