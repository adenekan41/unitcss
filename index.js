const minimist = require('minimist');
const error = require('./src/utils/error');
const convert = require('./src/utils/convert');

module.exports = () => {
	const args = minimist(process.argv.slice(2));
	const restArgs = minimist(process.argv);

	/* ---------------------------------- code ---------------------------------- */

	let [arg] = args._;
	let cmd = arg || 'help';
	if (args.version || args.v) {
		cmd = 'version';
	}

	if (arg && arg.length > 1) {
		cmd = 'file';
	}

	if (args.preview || args.p) {
		cmd = 'preview';
	}

	if (args.help || args.h) {
		cmd = 'help';
	}

	switch (cmd) {
		case 'file':
			require('./src/commands/index')(args);
			break;

		case 'version':
			require('./src/commands/version')(restArgs);
			break;

		case 'preview':
			require('./src/commands/preview')(restArgs);
			break;

		case 'help':
			require('./src/commands/help')(restArgs);
			break;

		default:
			error(`"${cmd}" is not a valid command!`);
			break;
	}
};

module.exports = {
	...convert,
};
