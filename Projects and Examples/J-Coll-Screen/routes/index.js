var express = require('express');
var router = express.Router();

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

module.exports = router;

