var http = require("http"),
    server,
app = require("express");

server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!\n");
});

server.listen(3000);

console.log("Server running on port 3000");
