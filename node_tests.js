
var http = require("http");
var url = require("url"); // For URL processing
var fs = require("fs"); // For filesystem access
var fylki = ["First response", "The Second", "The third", "The fourth", "The fifth"];
var count = 0;

http.createServer(function(request, response) {
	var path = url.parse(request.url).pathname;

	if(path == "/getstring") {
		console.log("got a getstring request");
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(fylki[count]);
		count++;
		response.end();
	}
	else if(path == "/update") {
		console.log("got a update request");
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(fylki[count]);
		response.end();
	}
	else {
		fs.readFile("test_page.html", function(err, file) {
			response.writeHead(200, {"Content-Type" : "text/html"});
			response.end(file, "utf-8");
		});
	}
}).listen(process.env.PORT);


