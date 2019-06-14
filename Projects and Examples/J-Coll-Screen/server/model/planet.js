var mongoose = require('mongoose');

var PlanetSchema = mongoose.Schema({
    Name: String,
    Description: String
},{
    collection: "SolarSystem"
});

module.exports = mongoose.model('planet',PlanetSchema);