const menus = {
	main: `
    cssunit [command] <options>
    folder .............. folder to apply units change`,

	folder: `
    cssunit folder <folder>
    --folder, -f ..... the folder to use`,
};

module.exports = (args) => {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

	console.log(menus[subCmd] || menus.main);
};
