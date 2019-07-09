var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var userModel = require('../model/User');

var passport = require('passport');

//GET ALL USERS OF THE SITE.
module.exports.displayUsersList = (request,response,next) => {
    
    userModel.User.find((error,userList) =>{

        if(error){
            return console.error(error);
        }else{
            response.render('users/index',{
                title: 'User List',
                userList: userList,
                displayName: request.user ? request.user.displayName : ""
            });
        }

    });
}

module.exports.addUserGet = (request,response,next) => {
    response.render('users/add',{
        title: 'Add to Users'
    });
}

module.exports.addUserPost = (request, response, next) =>{
    let newUser = new userModel.User({
        username: request.body.username,

        email: request.body.email,
        displayName: request.body.displayName
    });

    userModel.User.register(
        newUser,
        request.body.password,
        (error) => {

            if(error){
                console.log('Error: Inserting New User');

                if(error.name == "UserExistsError"){
                    request.flash('registerMessage','Registration Error: User Already Exists');
                    console.log('Registration Error: User Already exists');
                }

                return response.render('',{
                    title:"Register",
                    message: request.flash('registerMessage'),
                    displayName: request.user ? request.user.displayName : ""
                });
            }else{

                return passport.authenticate('local')(request,response, () =>{
                    response.redirect('/Users/ObjectList');
                });

            }

        }

    )
}


module.exports.deleteUser = (request,response,next) => {
    let id = request.params.id;

    userModel.User.deleteOne({_id:id},(error) =>{

        if(error){
            console.log(error);
        }else{
            response.redirect('../ObjectList');
        }
    });
}



