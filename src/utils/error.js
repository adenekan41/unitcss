const chalk = require('chalk');

/**
 * @function
 * @param {*} message
 * @param {*} exit
 * @default
 */

module.exports = (message, exit) => {
	console.error(chalk.red(message));
	exit && process.exit(1);
};
