var express = require('express');
var router = express.Router();

var usersRouter = require('../controllers/usersController');

router.get('/Users',usersRouter.displayUsersList);

module.exports = router;