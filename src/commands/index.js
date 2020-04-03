const chalk = require('chalk');
const replace = require('replace-in-file');
const clui = require('clui');
const question = require('../utils/inquire');

let thisProgressBar = new clui.Progress(20);
const convert = require('../utils/convert');

/* ---------------------------------- code ---------------------------------- */

module.exports = async (args) => {
	let [, , command, file] = process.argv;
	if (!file) {
		console.log(
			chalk.yellow(
				`Usage: cssunit ${command} ${
					args.r || args.folder ? 'FOLDER' : 'FILENAME'
				} `
			)
		);
		process.exit(1);
	}
	const { css_unit, global_size } = await question.askQuestion();

	console.log(thisProgressBar.update(10, 30));

	let options = {
		files: args.r || args.folder ? ['**/*.css'] : file,
		ignore: ['node_modules/**'],
		countMatches: true,
	};

	if (css_unit === 'Convert From px to Rem') {
		options = {
			...options,
			from: /(\d*)px/g,
			to: (match) => `${convert.toRem(match, global_size)}rem`,
		};
	} else {
		options = {
			...options,
			from: /(\d*)rem/g,
			to: (match) => `${convert.toPx(match, global_size)}px`,
		};
	}
	try {
		console.log(thisProgressBar.update(20, 30));
		const [results] = await replace(options);

		console.log(thisProgressBar.update(30, 30));
		console.log(
			chalk.greenBright('\n' + '\n' + '________CSS UNIT REPORT__________') +
				'\n' +
				'\n'
		);
		console.log(
			`${
				results.hasChanged
					? chalk.greenBright(
							`CssUnit is done and we found ${results.numMatches} matches and replaced  ${results.numReplacements}`
					  )
					: chalk.yellowBright('Nothing to change in here')
			}`
		);
	} catch (error) {
		error(`Error occurred: ${error}`);
	}
};
