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
		cmd = 'file';
	}

	if (args.folder || args.r) {
		cmd = 'folder';
	}

	if (args.preview || args.p) {
		cmd = 'preview';
	}

	if (args.help || args.h) {
		cmd = 'help';
	}

	switch (cmd) {
		case 'file':
		case 'folder':
			require('./src/commands/index')(restArgs);
			break;

		case 'version':
			require('./src/commands/version')(restArgs);
			break;

		case 'preview':
			require('./src/commands/preview')(restArgs);
			break;

		case 'help':
			console.log(
				chalk.cyanBright(`
        ==============================================

              UNIT CSS BY CODEWONDERS

        ==============================================
        `)
			);
			require('./src/commands/help')(restArgs);
			break;

		default:
			error(`"${cmd}" is not a valid command!`);
			break;
	}
};
