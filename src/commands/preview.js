var fs = require('fs');
module.exports = async (args) => {
	let [, , command, file] = process.argv;

	// check if we have a file
	if (!file) {
		console.log(
			chalk.yellow(
				`Usage: cssunit ${command} ${args.r || args.folder ? 'FILENAME' : null}`
			)
		);
		process.exit(1);
	}

	try {
		console.log('Previewing: ' + file);
		const prevfile = await fs.readFileSync(file, 'utf8');
		console.log(prevfile);
	} catch (error) {
		newerror(`Error occurred: ${error}`);
	}
};
