//STEP 1: Import all the modules necessary for creating the router.
var express = require('express');
var router = express.Router();
var galaxyController = require('../controllers/galaxyController');

//STEP 2: Specify the router paths.

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource from the galaxy colletion');
});

router.get('/ObjectList',galaxyController.displayGalaxyList);

router.get('/Galaxy-Add',galaxyController.addGalaxyDisplay);

router.post('/Galaxy-Add',galaxyController.addGalaxy);

router.get('/edit/:id',galaxyController.editGalaxyGET);

router.post('/edit/:id',galaxyController.editGalaxyPOST);

router.get('/delete/:id',galaxyController.deleteGalaxy);
//STEP 3: Export the routers functionality to be used by the application.
module.exports = router;