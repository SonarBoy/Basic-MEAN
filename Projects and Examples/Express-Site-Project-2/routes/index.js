var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/About', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
