var express = require('express');
var router = express.Router();

var planetController = require('../controllers/planetController');


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


router.get('/Planets',planetController.displayPlanetList);


//THIS IS ALL FOR POSTING INTO THE MONGO DATABASE
router.get('/Planets-Add',planetController.addPlanetsDisplay);

//THIS IS THE RETRIVAL OF THE DATA FROM THE ADD FORM TO 
//BE THEN PUT INTO THE DATABASE
router.post('/Planets-Add',planetController.addPlanet);

//GET REQUEST FOR THE EDIT PAGE NOTE THAT BOOTSTRAP DOES NOT WORK CURRENTLY ON 
//THIS LEVEL OF ROUTE.
router.get('/edit/:id',planetController.editPlanetGET);

//POST REQUEST TO UPDATE THE DATA BASE FROM THE EDIT PAGE
router.post('/edit/:id',planetController.editPlanetPOST);

//ROUTER DELETE FUNCTIONALITY
router.get('/delete/:id',planetController.deletePlanet);

module.exports = router;

