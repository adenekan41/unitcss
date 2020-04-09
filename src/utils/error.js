const chalk = require('chalk');

/**
 * @function
 * @param {String} message
 * @param {Function} exit
 * @default
 */

module.exports = (message, exit) => {
	console.error(chalk.red(message));
	exit && process.exit(1);
};
