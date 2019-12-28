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



/* GET home page. */


router.get('/', function(request, response, next) {
  response.render('index', { title: 'Express: ', alertStyle:'Success',
  displayName: request.user ? request.user.displayName : ""});
});

router.get('/About',function(request,response,next){
  response.render('about',{about: 'About Page: ', alertStyle:'Info',
  displayName: request.user ? request.user.displayName : ""});
});


//requireAuth ,
router.get('/Projects',function(request,response,next){
  response.render('projects',{proj: 'Project: ', alertStyle:'Warn',
  displayName: request.user ? request.user.displayName : ""});
});

router.get('/Services',function(request,response,next){
  response.render('services',{service: 'Service: ', alertStyle:'Danger',
  displayName: request.user ? request.user.displayName : ""});
});


//get login page
//router.get('/login',planetController.displayLoginPage);

//post request to process login
router.post('/login',planetController.processLoginPage);

//display user registration page.
//router.get('/register',planetController.displayRegisterPage);

//post request to process the user registration
router.post('/register',planetController.processRegisterPage);

//get request to peform user logout
router.get('/logout',planetController.performLogout);

module.exports = router;

