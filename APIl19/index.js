const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
if (req.url == "/") {
    res.end("G G from first end");
}
else if (req.url == "/about")
{
    res.end("Ji ji from about end");
}
else if (req.url == "/userapi")
{
    fs.readFile(`${__dirname}/userapi.json` , "utf-8", (err,data) =>{
        console.log(data);
    });
    res.end("G G from userapi end");
}
else
{ res.writeHead(404, {"content-type": "text/html"});
    res.end("<h3>Have 404 error page</h3>");
}
});
server.listen(8094,"127.0.0.1", () => {
console.log("Listening to the port number 8094");
});

