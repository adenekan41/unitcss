const { version } = require('../../package.json');
const chalk = require('chalk');

module.exports = () => {
	console.log(chalk.green(`cssunit v${version}`));
};
