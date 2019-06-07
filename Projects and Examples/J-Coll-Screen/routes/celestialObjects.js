//STEP 1: Import all the modules necessary for creating the router.
var express = require('express');
var router = express.Router();

//STEP 2: Import the Celestial Object Controller
var celestialObjectController = require('../controllers/celestialObjectController');

//STEP 3: Specify the router paths.
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource from the celestial object colletion');
}); 

router.get('/ObjectList',celestialObjectController.displayCelestialObjectList);

//STEP 4: GET REQUEST FOR ADDITIONS TO COLLECTION
router.get('/CelestialObjects-Add',celestialObjectController.addCelestialObjectsDisplay);

//STEP 5: POST REQUEST FOR ADDITIONS TO COLLECTION
router.post('/CelestialObjects-Add',celestialObjectController.addCelestialObjects);

//STEP 6: GET REQUEST FOR DELETION OF CELESTIAL OBJECT
router.get('/delete/:id',celestialObjectController.deleteCelestialObject);

router.get('/edit/:id',celestialObjectController.editCelestialObjectGET);
//STEP :EXPORT THE ROUTER MODULES TO THE ROUTER OBJECT
module.exports = router;


