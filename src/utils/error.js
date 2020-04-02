const chalk = require('chalk');

module.exports = (message, exit) => {
	console.error(chalk.red(message));
	exit && process.exit(1);
};
