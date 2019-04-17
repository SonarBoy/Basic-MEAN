let http = require('http');
let express = require('express');

//importing custom created route
let birds = require('./birds');


let app = express();

let hostName = "127.0.0.1";
let portNumber = 3000;


/*let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.end('Hello World');
});

server.listen(portNumber,hostName,() =>{
    console.log("Started Server");
}); */

//Simple Express routing examples

app.get('/',function (request,response){
    response.send('<h2>Home Page</h2>');
});

app.get('/About',function (request,response){
    response.send('<h2>About</h2>');
});

app.get('/Products',function (request,response){
    response.send('<h2>Products</h2>');
});

app.get('/Services',function (request,response){
    response.send('<h2>Services</h2>');
});

app.get('/Contact',function (request,response){
    response.send('<h2>Contact</h2>');
});

//using custom created route
app.get('/birds',birds);


//You can have More than one callback function can handle a route 
//(make sure you specify the next object). For example:
app.get('/exampleB', function (request,response,next){
    console.log("Sending to be From a");
    next() }, function(request,response){
        response.send('<h1>HTML HTML</h1>');
    });

//To define routes with route parameters, simply specify 
//the route parameters in the path of the route as shown below.
app.get('/user/:id',function (request,response){
    response.send(request.params);
});



//Wild card must be put at the end as a catch all
app.get('*',function(request,response){
    response.send('Catch all');
});

app.listen(portNumber,function(){ 
    console.log(`Example app listening pn port ${portNumber}`);
});