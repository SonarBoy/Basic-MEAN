//STEP 1: Import all the modules necessary for creating the router.
var express = require('express');
var router = express.Router();

//STEP 2: Specify the router paths.

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource from the galaxy colletion');
});


//STEP 3: Export the routers functionality to be used by the application.
module.exports = router;