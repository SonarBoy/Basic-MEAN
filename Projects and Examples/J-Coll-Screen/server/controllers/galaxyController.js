let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let galaxyModel = require('../model/Galaxy');

module.exports.displayGalaxyList = (request,response,next) => {
    galaxyModel.find((error,galaxyList) =>{

        if(error){
            return console.log(error);
        }else{
            response.render('galaxy/index',{
                title: 'Galaxy List',
                galaxyList: galaxyList
            });
        }
    })
}

module.exports.addGalaxyDisplay = (request,response,next) => {
    response.render('galaxy/add',{
        title:'Add new Galaxy Object'
    });
}

module.exports.addGalaxy = (request,response,next) =>{
    let newObject = galaxyModel({
        "Name": request.body.Name,
        "Designation": request.body.Designation,
        "Type": request.body.Type,
        "Diameter": request.body.Diameter,
        "DistanceFromEarth": request.body.DistanceFromEarth,
        "Mass": request.body.Mass,
        "Constellation": request.body.Constellation,
        "Discovered": request.body.Discovered,
        "Stars": request.body.Stars
    });

    galaxyModel.create(newObject,(error,galaxyModel) =>{
        if(error){
            console.log(error);
            response.end(error);
        }else{
            response.redirect('./ObjectList');
        }
    });
}

module.exports.editGalaxyGET = (request,response,next) =>{
    let id = request.params.id;

    galaxyModel.findById(id,(error,galaxyModelReturn) =>{
        if(error){
            console.log(error);
            response.end(error);
        }else{
            response.render('galaxy/edit',{
                title:"Edit Galaxy Object",
                galaxyObject: galaxyModelReturn
            })
        }
    });
}

module.exports.editGalaxyPOST = (request,response,next) =>{
    let id = request.params.id;

    let updatedGalaxyObject = galaxyModel({
        "_id":id,
        "Name": request.body.Name,
        "Designation": request.body.Designation,
        "Type": request.body.Type,
        "Diameter": request.body.Diameter,
        "DistanceFromEarth": request.body.DistanceFromEarth,
        "Mass": request.body.Mass,
        "Constellation": request.body.Constellation,
        "Discovered": request.body.Discovered,
        "Stars": request.body.Stars
    });

    galaxyModel.update({
        _id:id
        },updatedGalaxyObject, (error) =>{
            if(error){
                console.log(error);
                response.end(error);
            }else{
                response.redirect('../ObjectList');
            }
        });
}


module.exports.deleteGalaxy = (request,response,next) =>{
    let id = request.params.id;

    galaxyModel.remove({_id:id},(error) =>{

    if(error){
        console.log(error);
    }else{
        response.redirect('../ObjectList');
    }
    });
}