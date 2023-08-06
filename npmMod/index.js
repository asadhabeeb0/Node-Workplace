// // const chalk = require("chalk");
// // console.log(chalk.blue.("Hello world::"));

// // import chalk from 'chalk';
// // console.log(chalk.blue('Hello world!'));

// // import chalk from 'chalk';
// // const name = 'Sindre';
// // console.log(chalk.green('Hello %s'), name);
// // //=> 'Hello Sindre'

// // const chalk = require('chalk');
// // const log = console.log;
// // // Combine styled and normal strings
// // log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// // // Compose multiple styles using the chainable API
// // log(chalk.blue.bgRed.bold('Hello world!'));
// // // Pass in multiple arguments
// // log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// // // Nest styles
// // log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// // // Nest styles of the same type even (color, underline, background)
// // log(chalk.green(
// //     'I am a green line ' +
// //     chalk.blue.underline.bold('with a blue substring') +
// //     ' that becomes green again!'
// // ));
// // // ES2015 template literal
// // log(`
// // CPU: ${chalk.red('90%')}
// // RAM: ${chalk.green('40%')}
// // DISK: ${chalk.yellow('70%')}
// // `);
// // // ES2015 tagged template literal
// // log(chalk`
// // CPU: {red ${cpu.totalPercent}%}
// // RAM: {green ${ram.used / ram.total * 100}%}
// // DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// // `);
// // // Use RGB colors in terminal emulators that support it.
// // log(chalk.keyword('orange')('Yay for orange colored text!'));
// // log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// // log(chalk.hex('#DEADED').bold('Bold gray!'));


// // const colors = require('colors');
// // console.log('hello'.green); // outputs green text
// // console.log('i like cake and pies'.underline.red) // outputs red underlined text
// // console.log('inverse the color'.inverse); // inverses the color
// // console.log('OMG Rainbows!'.rainbow); // rainbow
// // console.log('Run the trap'.trap); // Drops the bass


// // Fixed
// const chalk = require('chalk');
// // console.log(chalk.blue('Hello world!'));
// // console.log(chalk.blue.italic('Hello world!'));
// // console.log(chalk.blue.underline.inverse('Hello world!'));
// console.log(chalk.green('Successed'));

// const chalk = require("chalk");
// console.log(chalk.blue.("Hello world::"));

// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));

// import chalk from 'chalk';
// const name = 'Sindre';
// console.log(chalk.green('Hello %s'), name);
// //=> 'Hello Sindre'

// const chalk = require('chalk');
// const log = console.log;
// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));
// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);
// // ES2015 tagged template literal
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);
// // Use RGB colors in terminal emulators that support it.
// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));


// const colors = require('colors');
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass


// Fixed
// const chalk = require('chalk');
// import { red } from 'chalk';
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.italic('Hello world!'));
// console.log(chalk.blue.underline.inverse('Hello world!'));
// console.log(chalk.red('Failed'));
// console.log(chalk.red.underline.inverse('Failed'));


// const validator = require("validator");
// const result = validator.isEmail("Badar@Anas.com"); 
// console.log(result);

// const chalk = require("chalk");
// console.log(chalk.red.underline.inverse('Failed'));

// const validator = require("validator");
// const result = validator.isEmail("Badar@Anas.com"); 
// console.log(result);
// const chalk = require("chalk");
// console.log(chalk.red.underline.inverse('Failed'));

// const chalk = require("chalk");
// const validator = require("validator");
// const result = validator.isEmail("Badar@Anas.com"); 
// console.log(result);

// Applying all packges on same thing
// const chalk = require("chalk");
// const validator = require("validator");
// const result = validator.isEmail("Badar@Anas.com"); 
// console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result) )
// Applying all packges on same thing
const chalk = require("chalk");
const validator = require("validator");
const result = validator.isEmail("Badar@Anas.co.m"); 
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result) );

