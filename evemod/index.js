//  Registering for the event fired only one time using once.
//  Create an emitter instance , rergister a couple of callback 
//  Resistering for event with callback parameters

// Another way
// const EventEmitter = require(event)
// const event = require("events");
// const EventEmitter = new event.EventEmitter;

// const EventEmitter = require("events");
// const event = new EventEmitter;
// event.emit("Callmylocation");
// event.on("Callmylocation", () => {
// console.log("Your location is Sargodha. Example 1 is done.");
// })

// const EventEmitter = require("events");
// const event = new EventEmitter;
// event.on("Callmylocation", () => {
// console.log("Your location is Sargodha. Example 1 is done.");
// })
// event.emit("Callmylocation");

// const EventEmitter = require("events");
// const event = new EventEmitter;
// event.on("Callmylocation", () => {
// console.log("Your location is Sargodha. Example 1 was done.");
// })
// event.on("Callmylocation", () => {
//     console.log("Your location is Kotmomin. Example 2 is started.");
// })
// event.on("Callmylocation", () => {
// console.log("Your location is Village. Example 2 is done.");
// })
// event.emit("Callmylocation");

const EventEmitter = require("events");
const event = new EventEmitter;
event.on("Checkpage", (sc , msg) => {
console.log(`Your status code is ${sc} and the page is ${msg}`);
});
event.emit("Checkpage", 200 ,"ok done");
