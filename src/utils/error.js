import chalk from 'chalk';

/**
 * @function
 * @param {*} message
 * @param {*} exit
 * @default
 */

const error = (message, exit) => {
	console.error(chalk.red(message));
	exit && process.exit(1);
};

export default error;
