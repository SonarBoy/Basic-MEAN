var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var planetModel = require('../model/planet');

var passport = require('passport');
var userModel = require('../model/User');

module.exports.displayPlanetList = (request, response, next) => {
    planetModel.find((error, planetList) => {

        if (error) {
            return console.error(error);
        } else {
            //Here we will later do a response.render
            response.render('planets/index', {
                title: 'Planet List',
                planetList: planetList
            });

        }
    });
};

module.exports.addPlanetsDisplay = (request, response, next) => {
    response.render('planets/add', {
        title: 'Add New Celestial Object'
    });
};

module.exports.addPlanet = (request, response, next) => {
    let newObject = planetModel({
        "Name": request.body.Name,
        "Description": request.body.Description
    });
    planetModel.create(newObject, (err, planetModel) => {

        if (err) {
            console.log(err);
            response.end(err);
        } else {
            //refresh to the planet list
            response.redirect('/Planets');
        }

    });
}


module.exports.editPlanetGET = (request, response, next) => {
    let id = request.params.id;

    planetModel.findById(id, (error, planetObject) => {

        if (error) {
            console.log(error);
            response.end(error);
        } else {
            response.render('planets/edit', {
                title: 'Edit Object',
                planet: planetObject
            });
        }
    });
}

module.exports.editPlanetPOST = (request, response, next) => {
    let id = request.params.id;

    let updatedPlanet = planetModel({
        "_id": id,
        "Name": request.body.Name,
        "Description": request.body.Description
    });

    planetModel.update({ _id: id }, updatedPlanet, (error) => {
        if (error) {
            console.log(error);
            response.end(error);
        } else {
            //refresh to the planet list
            response.redirect('/Planets');
        }
    });
}

module.exports.deletePlanet = (request, response, next) => {
    let id = request.params.id;

    planetModel.remove({ _id: id }, (error) => {
        if (error) {
            console.log(error);
            response.end(error);
        } else {
            //refresh to the planet list
            response.redirect('/Planets');
        }
    });
}


//PASSPORT STUFF PLEASE MAKE THE PROPER NOTES FOR THIS AS WELL

module.exports.displayLoginPage = (request, response, next) => {
    if (!request.User) {
        response.render('auth/login', {
            title: "Login",
            message: request.flash('loginMessage'),
            displayName: request.user ? request.user.displayName : ""
        });
    } else {
        return response.redirect('/');
    }
}

module.exports.processLoginPage = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: 'loginMessage',
    failureMessage: 'Authentication Error'}
);

module.exports.displayRegisterPage = (request, response, next) => {
    if (!request.User) {
        response.render('auth/register', {
            title: "Register",
            message: request.flash('registerMessage'),
            //USE THIS TO DISPLAY THE USER LOGGED IN.
            //FINISH THE CRUD NOTES AND MAKE SURE YOU HAVE A LINK TO LOGIN AND 
            //LOG OUT SOON.
            displayName: request.user ? request.user.displayName : ""
        });
    } else {
        return response.redirect('/');
    }
}

module.exports.processRegisterPage = (request, response, next) => {
    var newUser = new userModel.User({
        username: request.body.username,
        //password: request.body.password

        email: request.body.email,
        displayName: request.body.displayName
    });

    userModel.User.register(
        newUser,
        request.body.password,
        (error) => {

            //NO ERROR IN PROCESSING OF THE AUTHENTICATE
            if (error) {
                console.log('Error: Inserting New User');

                if (error.name == "UserExistsError") {
                    request.flash('registerMessage', 'Registration Error: User Already Exists');
                    console.log('Registration Error: User Already Exists');
                }

                return response.render('auth/register', {
                    title: "Register",
                    message: request.flash('registerMessage'),
                    displayName: request.user ? request.user.displayName : ""
                });
            } else{

            return passport.authenticate('local')(request, response, () => {
                response.redirect('/Planets');
            });

            }
        });

}


module.exports.performLogout = (request, response, next) => {
    request.logout();
    response.redirect('/');
}