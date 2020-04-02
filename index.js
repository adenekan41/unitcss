const figlet = require('figlet');
const chalk = require('chalk');
const minimist = require('minimist');
const error = require('./src/utils/error');

module.exports = () => {
	const args = minimist(process.argv.slice(2));
	const restArgs = minimist(process.argv);

	/* ---------------------------------- code ---------------------------------- */

	let [arg] = args._;
	let cmd = arg || 'help';

	if (args.version || args.v) {
		cmd = 'version';
	}

	if (args.file || args.f) {
		cmd = 'cssunit';
	}

	if (args.help || args.h) {
		cmd = 'help';
	}

	switch (cmd) {
		case 'cssunit':
			require('./src/commands/index')(restArgs);
			break;

		case 'version':
			require('./src/commands/version')(restArgs);
			break;

		case 'help':
			console.log(
				chalk.green(figlet.textSync('CssUnit', { horizontalLayout: 'default' }))
			);
			console.log('0.06rem');
			require('./src/commands/help')(restArgs);
			break;

		default:
			error(`"${cmd}" is not a valid command!`);
			break;
	}
};
