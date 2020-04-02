const figlet = require('figlet');
const chalk = require('chalk');
const minimist = require('minimist');

module.exports = () => {
	const args = minimist(process.argv.slice(2));

	// let cmd = args._[0] || 'help';

	let cmd;

	if (args.version || args.v) {
		cmd = 'version';
	}

	if (args.help || args.h) {
		cmd = 'help';
	}

	switch (cmd) {
		case 'version':
			require('./src/commands/version')(args);
			break;

		case 'version':
			require('./src/commands/version')(args);
			break;

		case 'help':
			console.log(
				chalk.green(figlet.textSync('CssUnit', { horizontalLayout: 'default' }))
			);
			require('./src/commands/help')(args);
			break;

		default:
			console.error(`"${cmd}" is not a valid command!`);
			break;
	}
};
