var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var planetModel = require('../model/planet');

var passport = require('passport');
var userModel = require('../model/User');

var jwt = require('jsonwebtoken');
var DB = require('../config/db');


/*
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
*/
/*
module.exports.processLoginPage = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: 'loginMessage',
    failureMessage: 'Authentication Error'}
);*/


module.exports.processLoginPage = (request,response,next) =>{
    passport.authenticate('local',
        (error,user,info) =>{

            if(error){
                return next(error);
            }

            

            if(!user){

                return response.json({success: false,msg: 'Failed to Log in',user: user});
                
            }

            request.logIn(user, (err) => {

                if(err){
                    return next(err);
                }

                const payload = {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email
                }

                const authToken = jwt.sign(payload, DB.secret,{
                    expiresIn: 604800 //1 week
                });


                return response.json({success:true, msg:'User logged in Successfully',
                user:{
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email
                }, token: authToken});


                //return response.redirect('/');
            });



        })(request,response,next);
}










/*
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
*/
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
                    
                    console.log('Registration Error: User Already Exists');
                }

                return response.json({success: false,msg: 'Failed to Log in'});
            } else {

            return response.json({success: true,msg: 'User registered Successfully!'});

            }
        });

}


module.exports.performLogout = (request, response, next) => {
    request.logout();
    return response.json({success: true,msg: 'User Logout Successful!'});
}