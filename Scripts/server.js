http = require ('http');

let hostName = "127.0.0.1";
let portNumber = 3000;

let server = http.createServer((request,response) => {
    response.statusCode = 200 ;
    response.setHeader('Content-Type','text/plain');
    response.end('Hello World from test!\n');
});


server.listen(portNumber,hostName, () =>{
    console.log('Server Running on ${hostName}:${portNumber}');
});
