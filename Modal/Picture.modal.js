const mongoose = require("mongoose");
// Define MongoDB schema and models for Employee
const PictureSchema = new mongoose.Schema({
   
    language:String,
      leadActor:String,
      directorName:String,
      genre:String,
 
}, { collection: `${process.env.COLLECTION}` });
module.exports = mongoose.model("Picture", PictureSchema);