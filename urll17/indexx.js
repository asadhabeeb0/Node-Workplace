const http = require('http');
const server = http.createServer((req, res) => {
if (req.url == "/") {
    res.end("G G from first end");
}
else if (req.url == "/about")
{
    res.end("Ji ji from about end");
}
else
{
    res.end("Have 404 error page");
}
});
server.listen(8092,"127.0.0.1", () => {
console.log("Listening to the port number 8092");
});