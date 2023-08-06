// I installed nodemon

const chalk = require("chalk");
const validator = require("validator");
const result = validator.isEmail("Badar@Anas.com"); 
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result) );

// When we will save the file it will resart automatically

// I uninstalled nodemon