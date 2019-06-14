//STEP 1: Require Mongoose module to build the data model.
let mongoose = require('mongoose');

//STEP 2: Build the Galaxy Schema 
//This will inculde the EXACT NAMES of the properties of the documents in the mongoose database.
let GalaxySchema = mongoose.Schema({
    Name: String,
    Designation: String,
    Type: String,
    Diameter: String,
    DistanceFromEarth: String,
    Mass: String,
    Constellation: String,
    Discovered: String,
    Stars: String
},{
    collection: "Galaxy"
});

//STEP 3: Export the module for use.
module.exports = mongoose.model("Galaxy",GalaxySchema);