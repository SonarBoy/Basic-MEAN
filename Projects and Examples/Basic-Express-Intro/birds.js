let express = require('express');
let router = express.Router();


router.use(function(request,response,next){
    console.log('Time: ',Date.now());
    next()
})

router.get('/birds',function(request,response){
    response.send('<h1>The Birds are home! </h1>');
})

module.exports = router;