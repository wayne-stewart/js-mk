
/*
    NOT FOR PRODUCTION!

    This is a simple  nodejs server for local testing
*/

var http = require("http");
var fs = require("fs");

const PORT = 8080;

var handleRequest = function(request, response) {
    console.log("REQUEST: " + request.url);
    fs.readFile(__dirname + request.url, function(error, data){
        response.end(data);
    });
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server Listening at http://localhost:" + PORT);
});