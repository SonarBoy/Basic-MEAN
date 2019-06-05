var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var planetModel = require('../model/planet');

module.exports.displayPlanetList = (request,response,next) => {
    planetModel.find((error,planetList) => {
    
    if(error){
        return console.error(error);
    }else{
              //Here we will later do a response.render
                response.render('planets/index',{
                    title: 'Planet List',
                    planetList: planetList
                });
            
    }
    });
};

module.exports.addPlanetsDisplay = (request,response,next) => {
    response.render('planets/add',{
    title: 'Add New Celestial Object'    
    });
};

module.exports.addPlanet = (request,response,next) => {
    let newObject  = planetModel({"Name": request.body.Name,
    "Description":request.body.Description});
    planetModel.create(newObject, (err,planetModel) => {
    
    if(err){
        console.log(err);
        response.end(err);
    }else{
        //refresh to the planet list
        response.redirect('/Planets');
    }

    });  
}


module.exports.editPlanetGET = (request,response,next) => {
    let id = request.params.id;

    planetModel.findById(id, (error, planetObject) => {
    
    if(error){
        console.log(error);
        response.end(error);
    }else{
        response.render('planets/edit',{
        title: 'Edit Object',
        planet: planetObject
        });
    }
    });
}

module.exports.editPlanetPOST = (request,response,next) =>{
    let id = request.params.id;

    let updatedPlanet  = planetModel({
    "_id" : id,
    "Name": request.body.Name,
    "Description" : request.body.Description
    });

    planetModel.update({_id:id},updatedPlanet,(error) =>{
    if(error){
        console.log(error);
        response.end(error);
    }else{
        //refresh to the planet list
        response.redirect('/Planets');
    }
    });
}

module.exports.deletePlanet = (request,response,next) =>{
    let id = request.params.id;

    planetModel.remove({_id:id},(error) =>{
    if(error){
        console.log(error);
        response.end(error);
    }else{
        //refresh to the planet list
        response.redirect('/Planets');
    }
    });
}