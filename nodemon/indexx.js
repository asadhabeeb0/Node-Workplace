const chalk = require("chalk");
const validator = require("validator");
const result = validator.isEmail("Badar@Anas.com"); 
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result) );

// Go work on previous file since chalk anmd validator are not global.
