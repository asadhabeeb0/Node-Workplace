// var http = require('http');
// const server = http.createServer((req, res) => {
// console.log(req.url);
// res.end("G G from other end");
// });
// server.listen(8091,"127.0.0.1", () => {
// console.log("Listening to the port number 8091");
// });

// More than one page
// const http = require('http');
// const server = http.createServer((req, res) => {
// if (req.url == "/") {
//     res.end("G G from first end");
// }
// else if (req.url == "/aboutus")
// {
//     res.end("Ji ji from aboutus end");
// }
// });
// server.listen(8092,"127.0.0.1", () => {
// console.log("Listening to the port number 8092");
// });

// If page not found
// const http = require('http');
// const server = http.createServer((req, res) => {
// if (req.url == "/") {
//     res.end("G G from first end");
// }
// else if (req.url == "/aboutme")
// {
//     res.end("Ji ji from aboutme end");
// }
// else if (req.url == "/aboutmyteam")
// {
//     res.end("Jump j from aboutteam end");
// }
// else if (req.url == "/aboutboss")
// {
//     res.end("Had from aboutboss end");
// }
// else
// {
//     res.end("Have 404 error page");
// }
// });
// server.listen(8092,"127.0.0.1", () => {
// console.log("Listening to the port number 8092");
// });


// If page not found but Problem
// const http = require('http');
// const server = http.createServer((req, res) => {
// if (req.url == "/") {
//     res.end("G G from first end");
// }
// else if (req.url == "/aboutme")
// {
//     res.end("Ji ji from aboutme end");
// }
// else
// { res.writeHead(404);
//     res.end("Have 404 error page");
// }
// });
// server.listen(8092,"127.0.0.1", () => {
// console.log("Listening to the port number 8092");
// });

// const http = require('http');
// const server = http.createServer((req, res) => {
// if (req.url == "/") {
//     res.end("G G from first end");
// }
// else if (req.url == "/aboutme")
// {
//     res.end("Ji ji from aboutme end");
// }
// else
// { res.writeHead(404, {"Content-type" : "text/html"});
//     res.end("<h3> Have 404 error page </h3>");
// }
// });
// server.listen(8092,"127.0.0.1", () => {
// console.log("Listening to the port number 8092");
// });

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
