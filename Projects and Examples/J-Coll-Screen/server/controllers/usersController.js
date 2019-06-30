var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var userModel = require('../model/User');



module.exports.displayUsersList = (request,response,next) => {
    
    userModel.User.find((error,userList) =>{

        if(error){
            return console.error(error);
        }else{
            response.render('users/index',{
                title: 'User List',
                userList: userList
            });
        }

    });
}



