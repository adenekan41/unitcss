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
	console.log(css_unit);
	//check for the type of conversion
	if (css_unit === 'Convert from px to rem') {
		options = {
			...options,
			from: /(\d+)px/g,
			to: (match) => `${convert.toRem(match, global_size)}rem`,
		};
	} else if (css_unit === 'Convert from rem to px') {
		options = {
			...options,
			from: /(\d+)rem/g,
			to: (match) => `${convert.toPx(match, global_size)}px`,
		};
	} else if (css_unit === 'Convert from px to em') {
		options = {
			...options,
			from: /(\d+)px/g,
			to: (match) => `${convert.toEm(match, global_size)}em`,
		};
	} else if (css_unit === 'Convert from em to px') {
		options = {
			...options,
			from: /(\d+)em/g,
			to: (match) => `${convert.toPx(match, global_size)}px`,
		};
	}

	try {
		console.log(thisProgressBar.update(20, 30));
		const [results] = await replace(options);

		console.log(chalk.greenBright('\n' + 'UNIT CSS REPORT: ') + '\n');
		console.log(
			`${
				results.hasChanged
					? `Unitcss is done and we found ${chalk.greenBright(
							results.numMatches
					  )} matches and replaced  ${chalk.greenBright(
							results.numReplacements
					  )}\n File we helped you convert: ${chalk.blueBright(
							results.file
					  )} \n`
					: chalk.yellowBright('Nothing to change in here \n')
			}`
		);
	} catch (error) {
		newerror(`Error occurred: ${error}`);
	}
};
