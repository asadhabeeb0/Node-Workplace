// const bioData = {
//     "naam" : "Badar",
//     "age" : "16",
//     "shoes" : "5"
// };

// Convert to json
// Add to another File
// Read
// Convert to object 
// console.log

// const fs = require("fs");
// const bioData = {
//     "naam" : "Badar",
//     "age" : "16",
//     "shoes" : "5"
// };
// const jsondata = JSON.stringify(bioData);
// fs.writeFile('json22.json', jsondata, (err) => {
// console.log("Done gg")
// });
// fs.readFile('json22.json', "utf-8" , (err,data) => {
//     console.log(data);
// }); 

const fs = require("fs");
const bioData = {
    "naam" : "Badar",
    "age" : "16",
    "shoes" : "5"
};
const jsondata = JSON.stringify(bioData);

fs.readFile('json22.json', "utf-8" , (err,data) => {
    const orgdata = JSON.parse(jsondata);
    console.log(data);
    console.log(orgdata);
});

// Output
// {"naam":"Badar","age":"16","shoes":"5"}
// { naam: 'Badar', age: '16', shoes: '5' }
