var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var planet = require('../model/planet');

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Express', alertStyle:'Success'});
});

router.get('/About',function(request,response,next){
  response.render('about',{about: 'About Page', alertStyle:'Info'});
});

router.get('/Projects',function(request,response,next){
  response.render('projects',{proj: 'This is the projects', alertStyle:'Warn'});
});

router.get('/Services',function(request,response,next){
  response.render('services',{service: 'This is the service', alertStyle:'Danger'});
});

router.get('/Planets',(request,response,next) => {
  planet.find((error,planetList) => {

    if(error){
      return console.error(error);
    }else{
      console.log(planetList);

            //Here we will later do a response.render

            
                response.render('planets/index',{
                    title: 'Planet List',
                    planetList: planetList
                })
            
    }
  });
});

module.exports = router;

