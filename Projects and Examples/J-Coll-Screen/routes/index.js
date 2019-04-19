var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/About',function(request,response,next){
  response.render('about',{title: 'About Page'});
});

router.get('/Projects',function(request,response,next){
  response.render('projects',{proj: 'This is the projects'});
});

router.get('/Services',function(request,response,next){
  response.render('services',{service: 'This is the service'});
});

module.exports = router;
