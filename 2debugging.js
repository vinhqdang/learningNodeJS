//allows the program acts as a server
var http = require ("http");

function process_request (req, res) {
	var body = "Hello\n";
	var content_length = body.lenggth;
	res.writeHead (200, {
		'Content-Length': content_length,
		'Content-Type':'text/plain'
	});
	res.end (body);
}

var s = http.createServer (process_request);
s.listen (8109);