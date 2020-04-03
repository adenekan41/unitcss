const chalk = require('chalk');
const { version } = require('../../package.json');

/**
 * @function
 * @default
 */

module.exports = () => {
	console.log(chalk.green(`cssunit v${version}`));
};
