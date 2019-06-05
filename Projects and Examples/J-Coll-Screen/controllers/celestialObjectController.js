//STEP 1: Include the router object
var express = require('express');
var router = express.Router();

//STEP 2: Inculde the mongoose model as well as the data model we created.
var mongoose = require('mongoose');
var celestialObjectModel = require('../model/CelestialObjects');

//STEP 3: First GET request of all the documents in the celestialObjectsCollection 
// We will also go into detail about how the steps work in this format.
module.exports.displayCelestialObjectList = (request,response,next) => {

    //Ask the model object to find the celestial object colletion
    celestialObjectModel.find((error,celestialObjectList) =>{

        //If there is an error during execution print it out to the console.
        if(error){
            return console.error(error);
        }else{
            //Otherwise render the index.ejs page in the /views/celestialObjects directory
            //passing the title and celestialObjectList properties in the response object.
            response.render('celestialObjects/index',{
                title: 'Celestial Object List',
                celestialObjectList: celestialObjectList
            });
        }
    });
}

//STEP 4: First GET request to the add Celestial Object
module.exports.addCelestialObjectsPage = (request,response,next) =>{
    response.render('celesrialObjects/add',{
        title:'Add New Celestial Object'
    });
}

