var mongoose = require('mongoose');

//create model class
var vitaminSchema = mongoose.Schema({
    name: String,
    chem_Name: String,
    solubility: String
},{
    collection: "Vitamins"
});

module.exports = mongoose.model('test',vitaminSchema);