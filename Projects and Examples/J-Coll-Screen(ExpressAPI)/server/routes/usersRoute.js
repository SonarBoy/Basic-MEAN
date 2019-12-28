var express = require('express');
var router = express.Router();

var usersRouter = require('../controllers/usersController');

router.get('/',function(req, res, next) {
    res.redirect('/Users/ObjectList');
}); 
router.get('/ObjectList',usersRouter.displayUsersList);
router.get('/delete/:id',usersRouter.deleteUser);
router.get('/User-Add',usersRouter.addUserGet);
router.post('/User-Add',usersRouter.addUserPost);
router.get('/forgotPassword',usersRouter.forgotPasswordGet);
router.post('/forgotPassword',usersRouter.forgotPasswordPost);

module.exports = router;