var express = require('express');
var router = express.Router();

var usersRouter = require('../controllers/usersController');


router.get('/',usersRouter.displayUsersList);
router.get('/delete/:id',usersRouter.deleteUser);
router.get('/add',usersRouter.addUserGet);
router.post('/add',usersRouter.addUserPost);

//
router.post('/edit/:id',usersRouter.editUser);
//

router.get('/forgotPassword',usersRouter.forgotPasswordGet);
router.post('/forgotPassword',usersRouter.forgotPasswordPost);

module.exports = router;