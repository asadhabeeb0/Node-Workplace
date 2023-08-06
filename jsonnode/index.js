// const bioData = {
//     naam : "Badar",
//     age : "16",
//     shoes : "5"
// };
// console.log(bioData.shoes);

// const bioData = {
//     naam : "Badar",
//     age : "16",
//     shoes : "5"
// };
// const jsondata = JSON.stringify(bioData);
// console.log(jsondata);

// Property can not be taken
// const bioData = {
//     naam : "Badar",
//     age : "16",
//     shoes : "5"
// };
// const jsondata = JSON.stringify(bioData);
// console.log(jsondata.channel);

const bioData = {
    "naam" : "Badar",
    "age" : "16",
    "shoes" : "5"
};
const jsondata = JSON.stringify(bioData);
const objdata = JSON.parse(jsondata);
console.log(objdata);
