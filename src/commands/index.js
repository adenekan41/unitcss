const chalk = require('chalk');
const replace = require('replace-in-file');
const clui = require('clui');
const question = require('../utils/inquire');
const convert = require('../utils/convert');
const newerror = require('../utils/error');

/* ---------------------------------- code ---------------------------------- */

module.exports = async (args) => {
	let thisProgressBar = new clui.Progress(20);
	let [, , command, file] = process.argv;
	let options = {
		files: args.r || args.folder ? ['**/*.css', '**/*.scss'] : file,
		ignore: ['node_modules/**'],
		countMatches: true,
	};

	// check if we have a file
	if (!file) {
		console.log(
			chalk.yellow(
				`Usage: unitcss ${command} ${
					args.r || args.folder ? 'FOLDER' : 'FILENAME'
				} `
			)
		);
		process.exit(1);
	}

	const { css_unit, global_size } = await question();
	console.log(thisProgressBar.update(10, 30));

	//check for the type of conversion
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
							`Unitcss is done and we found ${results.numMatches} matches and replaced  ${results.numReplacements}`
					  )
					: chalk.yellowBright('Nothing to change in here')
			}`
		);
	} catch (error) {
		newerror(`Error occurred: ${error}`);
	}
};
