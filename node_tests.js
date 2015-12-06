
var http = require("http");
var url = require("url"); // For URL processing
var fs = require("fs"); // For filesystem access
var currentWord = "";

http.createServer(function(request, response) {
	var path = url.parse(request.url).pathname;

	if(path == "/change") {
		var queries = url.parse(request.url).query;
		console.log("The queries:" + queries);
		currentWord = queries;

		console.log("got a change request");
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(currentWord);
		response.end();
	}
	else if(path == "/update") {
		console.log("got an update request");
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(currentWord);
		response.end();
	}
	else {
		fs.readFile("test_page.html", function(err, file) {
			response.writeHead(200, {"Content-Type" : "text/html"});
			response.end(file, "utf-8");
		});
	}
}).listen(process.env.PORT);


