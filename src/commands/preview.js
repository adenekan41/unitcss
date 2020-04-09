const fs = require('fs');
const newerror = require('../utils/error');
const chalk = require('chalk');

module.exports = async (args) => {
	let [, , command, file] = process.argv;

	// check if we have a file
	if (!file) {
		console.log(chalk.yellow(`Usage: unitcss ${command} <FILENAME>`));
		process.exit(1);
	}

	try {
		console.log(chalk.green('Previewing: ' + file));
		const prevfile = await fs.readFileSync(file, 'utf8');

		const reGex = [/(\d+)px/g, /(\d+)rem/g, /(\d+)em/g, /(\d+)vw/g, /(\d+)vh/g];
		let matchedResults = [];

		for (let i = 0; i < reGex.length; i++) {
			const result = (prevfile || '').match(reGex[i]) || [];
			matchedResults.push(result);
		}

		const [px, rem, em, vw, vh] = matchedResults;
		console.log(
			`\nUnits Results:
      ${`You have ${chalk.blue(
				px.length + ' occurrence of px '
			)} in (${chalk.blue(file)})
      You have ${chalk.blue(
				rem.length + ' occurrence of rem'
			)} in (${chalk.blue(file)})
      You have ${chalk.blue(em.length + ' occurrence of em ')} in (${chalk.blue(
				file
			)})
      You have ${chalk.blue(vw.length + ' occurrence of vw ')} in (${chalk.blue(
				file
			)})
      You have ${chalk.blue(vh.length + ' occurrence of vh ')} in (${chalk.blue(
				file
			)})
		`}`
		);
		// console.log(prevfile);
	} catch (error) {
		newerror(`Error occurred: ${error}`);
	}
};
