//Necessary for building the applicating
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Schema: creating reference to database schema
let vitamin = require('../models/contact.js');

//GET OPERATION Simple show of all the vitamins

router.get('/',(request,response,next) =>{
    vitamin.find((error,vitaminList) => {
        if(error){
            return console.error(error);
        }else{
            console.log(vitaminList);

            //Here we will later do a response.render

            /*
                res.render('contacts/index',{
                    title: 'Vitamin List',
                    vitaminList: vitaminList
                })
            */
        }
    });
});


module.exports = router;