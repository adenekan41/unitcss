const fs = require('fs');
const chalk = require('chalk');
const replace = require('replace-in-file');
const clui = require('clui');
const question = require('../utils/inquire');
const convert = require('../utils/convert');
const includesOneOf = require('../utils/includes-one-of');
const newerror = require('../utils/error');

/* ---------------------------------- code ---------------------------------- */

module.exports = async (args) => {
	let thisProgressBar = new clui.Progress(20);
	let [, , file] = process.argv;
	const isFolder = await fs.statSync(file).isDirectory();

	const getFileDir = (fileDir) =>
		fs
			.readdirSync(fileDir)
			.filter((file) =>
				includesOneOf(['.css', '.scss', '.sass', '.less'], file)
			)
			.map(
				(filteredFile) =>
					'**/*' + filteredFile.substring(filteredFile.indexOf('.'))
			);

	let options = {
		files: isFolder ? getFileDir(file) : args._,
		ignore: ['node_modules/**'],
		countMatches: true,
	};

	// check if we have a file
	if (!file) {
		console.log(chalk.yellow(`Usage: unitcss <FILE> or <FOLDER> `));
		process.exit(1);
	}

	const { css_unit, global_size } = await question();
	console.log(thisProgressBar.update(10, 30));

	//check for the type of conversion
	if (css_unit === 'Convert from px to rem') {
		options = {
			...options,
			from: /(\d*\.?\d+)px/g,
			to: (match) => `${convert.toRem(match, global_size)}rem`,
		};
	} else if (css_unit === 'Convert from rem to px') {
		options = {
			...options,
			from: /(\d*\.?\d+)rem/g,
			to: (match) => `${convert.toPx(match, global_size)}px`,
		};
	} else if (css_unit === 'Convert from px to em') {
		options = {
			...options,
			from: /(\d*\.?\d+)px/g,
			to: (match) => `${convert.toEm(match, global_size)}em`,
		};
	} else if (css_unit === 'Convert from em to px') {
		options = {
			...options,
			from: /(\d*\.?\d+)em/g,
			to: (match) => `${convert.toPx(match, global_size)}px`,
		};
	}

	try {
		console.log(thisProgressBar.update(20, 30));
		const results = await replace(options);
		console.log(thisProgressBar.update(30, 30));
		console.log(css_unit);
		console.log(chalk.greenBright('\n' + 'UNIT CSS REPORT: ') + '\n');
		results.map((result) => {
			console.log(
				`${
					result.hasChanged
						? `Unitcss is done and we found ${chalk.greenBright(
								result.numMatches
						  )} matches and we've helped you convert ${chalk.greenBright(
								result.numReplacements
						  )} units in : ${chalk.blueBright(result.file)} \n`
						: chalk.white(
								`Nothing to change in ${chalk.blueBright(result.file)} \n`
						  )
				}`
			);
		});
	} catch (error) {
		newerror(`Error occurred: ${error}`);
	}
};
