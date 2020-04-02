const chalk = require('chalk');
const fs = require('fs');
var glob = require('glob');
var replace = require('replace');
var clui = require('clui');

var Spinner = clui.Progress;
const convert = require('../utils/convert-to-px');
module.exports = (args) => {
	// Make sure we got a filename on the command line.
	let [, , command, file] = process.argv;
	if (!file) {
		console.log(chalk.yellow('Usage: cssunit ' + command + ' FILENAME'));
		process.exit(1);
	}
	// Read the file and print its contents.

	// fs.readFile(file, 'utf8', (err, data) => {
	// 	if (err) throw err;
	// 	console.log(chalk.green('OK: ' + file));
	// 	console.log(data);
	// });

	// Find file(s)
	glob(file, function(err, files) {
		if (err) {
			throw err;
		}
		files.forEach(function(item, index, array) {
			var thisProgressBar = new Spinner('Working file ...');
			console.log(thisProgressBar.start());
			// console.log(fs.readFileSync(item, 'utf8'));
			// Find and Replace string
			replace({
				regex: /(\d+)px/,
				replacement: `${convert(/(\d+)px/)}rem`,
				paths: [item],
				recursive: true,
				silent: true,
			});
			// console.log('Replacement complete');
			// Read file
			// console.log(fs.readFileSync(item, 'utf8'));
			console.log(thisProgressBar.stop());
			console.log(chalk.greenBright('Replacement complete'));
		});
	});
};
