const add = (a,b) => {
return a+b;
};
// module.exports.add = add;

const name = "Veer";

const sub = (a,b) => {
return a-b;
 }; 
// module.exports.sub = sub;

const multi = (a,b) => {
return a*b; };
// module.exports.multi = multi;

const divi = (a,b) => {
return a/b;
 };
// module.exports.divi = divi;

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// module.exports.divi = divi;

// Naming could be any
// module.exports.add1 = add;
// module.exports.sub2 = sub;
// module.exports.multi3 = multi;
// module.exports.divi4 = divi;

// Object Restructuring
module.exports = {add,sub,multi,divi};

// Object Restructuring
module.exports = {add,sub,multi,divi,name};

