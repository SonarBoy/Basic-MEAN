//STEP 1: Require Mongoose module to build the data model.
let mongoose = require('mongoose');

//STEP 2: Build the CelestialObjectSchema Schema 
//This will inculde the EXACT NAMES of the properties of the documents in the mongoose database.
let CelestialObjectSchema = mongoose.Schema({
    Name: String,
    Description: String,
},{
    collection: "CelestialObjects"
});

//STEP 3: Export the module for use.
module.exports = mongoose.model("CelestialObject",CelestialObjectSchema);

