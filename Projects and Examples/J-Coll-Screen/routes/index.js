var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var planetModel = require('../model/planet');

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Express: ', alertStyle:'Success'});
});

router.get('/About',function(request,response,next){
  response.render('about',{about: 'About Page: ', alertStyle:'Info'});
});

router.get('/Projects',function(request,response,next){
  response.render('projects',{proj: 'Project: ', alertStyle:'Warn'});
});

router.get('/Services',function(request,response,next){
  response.render('services',{service: 'Service: ', alertStyle:'Danger'});
});

router.get('/Planets',(request,response,next) => {
  planetModel.find((error,planetList) => {

    if(error){
      return console.error(error);
    }else{
            //Here we will later do a response.render

                response.render('planets/index',{
                    title: 'Planet List',
                    planetList: planetList
                })
            
    }
  });
});

//THIS IS ALL FOR POSTING INTO THE MONGO DATABASE
router.get('/Planets-Add',(request,response,next) => {

  response.render('planets/add',{
    title: 'Add New Celestial Object'    
  });

});

router.post('/Planets-Add',(request,response,next) => {

  //THIS IS THE RETRIVAL OF THE DATA FROM THE ADD FORM TO 
  //BE THEN PUT INTO THE DATABASE
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

});

module.exports = router;

