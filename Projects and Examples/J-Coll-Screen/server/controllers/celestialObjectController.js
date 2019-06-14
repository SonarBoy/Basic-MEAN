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
module.exports.addCelestialObjectsDisplay = (request,response,next) =>{
    response.render('celestialObjects/add',{
        title:'Add New Celestial Object'
    });
}

//STEP 5: POST request to add a new planet to the celestialObjects collection
module.exports.addCelestialObjects = (request,response,next) =>{

    //Create a new object that is of type celestial object and 
    //populate it with the variables from the request.
    let newObject = celestialObjectModel({"Name":request.body.Name,
    "Description":request.body.Description});

    //Call the create function passing on the newObject and the model 
    //you want to add it into.
    celestialObjectModel.create(newObject, (error,celestialObjectModel) =>{

        if(error){
            //if there is an error spit it out to the console.
            console.log(error);
            response.end(error);
        }else{
            //Otherwise reditect the navigation to the ObjectList.
            response.redirect('ObjectList');
        }
    });

}

//STEP 5: Specify the POST request to delete the celestial object.
module.exports.deleteCelestialObject = (request,response,next) => {
    let id = request.params.id;

    celestialObjectModel.remove({_id:id},(error) =>{

        if(error){
            console.log(error);
            response.send(error);
        }else{
            //JESUS THANK YOU FOR HELPING ME WITH THIS.
            //NOTE:WHEN SPECIFYING REDIRECTION WITH MULTIPLE ROUTER OBJECTS
            //THINK ABOUT IT LIKE A DIRECTORY STRUCTURE WHEN PROGRAMMING IT.
            response.redirect('../ObjectList');
        }
    });
}

module.exports.editCelestialObjectGET = (request,response,next) =>{

    let id = request.params.id;

    celestialObjectModel.findById(id, (error,celestialObjectReturn) =>{

        if(error){
            console.log(error);
            response.end(error);
        }else{
            response.render('celestialObjects/edit',{
                title:"Edit Celestial Object",
                celestialObject: celestialObjectReturn
            });
        }
    });
}

module.exports.editCelestialObjectPOST = (request,response,next) => {
    let id = request.params.id;

    let updatedCelestialObject = celestialObjectModel({
        "_id": id,
        "Name": request.body.Name,
        "Description": request.body.Description
    });

    celestialObjectModel.update({
        _id:id
    }, updatedCelestialObject, (error) =>{

        if(error){
            console.log(error);
            response.end(error);
        }else{
            response.redirect('../ObjectList');
        }

    });
}

