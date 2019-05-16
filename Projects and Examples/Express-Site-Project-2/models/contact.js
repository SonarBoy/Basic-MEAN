var mongoose = require('mongoose');

//create model class
var vitaminSchema = mongoose.Schema({
    Name: String,
    ChemicalName: String,
    Solubility: String
},{
    collection: "Vitamins"
});

module.exports = mongoose.model('vitamins',vitaminSchema);