var express = require('express');
var router = express.Router();

var planetController = require('../controllers/planetController');

var passport = require('passport');

var jwt = require("jsonwebtoken");


//CHECKING TO SEE IF THE LOGIN IS PRESENT.
function requireAuth(request,response,next){
  console.log(request.user);
  //check to see if the user is logged in.
  if(!request.isAuthenticated() || request.user.username != "Joshua"){
    return response.redirect('/login');
  }
  next();
  
}

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

