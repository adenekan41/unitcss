const chalk = require('chalk');

const menus = {
	main: `
  Options: 

    unitcss ${chalk.blue('[command]')} <options>
    ${chalk.blue('<folder>')} .............. to change unit of files in a folder
    ${chalk.blue('<file>')} .............. to change unit of a file
    --version, -v .............. check version of css unit
    --perview, -p .............. preview file to make changes to
    

    Working with folders:

    unitcss ${chalk.blue(
			'<foldername>'
		)} ..... to change unit of files in a folder


    Working with files : 

    unitcss ${chalk.blue('<file>')} ..... to change unit of a file

    `,

	folder: `
  
    unitcss <folder> ..... to change unit of files in a folder
    
    `,

	file: `
  
    unitcss <file> ..... to change unit of a file
    
    `,
	preview: `
  
    unitcss preview <file>
    --preview, -p ..... to preview content of a file
    
    `,
};

/**
 * @default
 * @function
 * @param {Array} args
 */
module.exports = (args) => {
	const [args1, args2] = args._;
	const subCmd = args1 === 'help' ? args2 : args1;

	console.log(menus[subCmd] || menus.main);
};
