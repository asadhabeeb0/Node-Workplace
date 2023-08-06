// Previous method

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();
// server.on('request', (req,res) => {
// fs.readFile('input.txt', (err,data) => {
// if (err) return console.error(err);
// res.end(data.toString());
// });
// });
// server.listen(8097,"127.0.0.1");
// console.log("Listening to the port number 8097");

// Second way
// Reading from a Stream
// Create a readable Stream
// Handle stream events (data,end,error)

// const { error } = require("console");
// const fs = require("fs");
// const http = require("http");
// const { Stream } = require("stream");
// const server = http.createServer();
// server.on('request', (req,res) => {
// const rstream = fs.createReadStream('input2.txt');
// rstream.on('data', (chunkdta) => {
// res.write(chunkdta);
// });
// rstream.on('end', () => {
// res.end();
// });
// rstream.on('error', (err) => {
//     console.log(err);
//     res.end("File is not found.");
// });
// });
// server.listen(8097,"127.0.0.1");
// console.log("Listening to the port number 8097");


const { error } = require("console");
const fs = require("fs");
const http = require("http");
const { Stream } = require("stream");
const server = http.createServer();
server.on('request', (req,res) => {
const rstream = fs.createReadStream('input2.txt'); 
rstream.pipe(res)
});
server.listen(8098,"127.0.0.1");
console.log("Listening to the port number 8098");

