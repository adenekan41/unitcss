const fs = require('fs');
const newerror = require('../utils/error');
const chalk = require('chalk');

module.exports = async (args) => {
	let [, , command, file] = process.argv;

	// check if we have a file
	if (!file) {
		console.log(
			chalk.yellow(
				`Usage: unitcss ${command} ${args.r || args.folder ? 'FILENAME' : null}`
			)
		);
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
      ${`You Have ${chalk.blue(px.length + 'px')} in (${chalk.blue(file)})
      You Have ${chalk.blue(rem.length + 'rem')} in (${chalk.blue(file)})
      You Have ${chalk.blue(em.length + 'em')} in (${chalk.blue(file)})
      You Have ${chalk.blue(vw.length + 'vw')} in (${chalk.blue(file)})
      You Have ${chalk.blue(vh.length + 'vh')} in (${chalk.blue(file)})
		`}`
		);
		// console.log(prevfile);
	} catch (error) {
		newerror(`Error occurred: ${error}`);
	}
};
