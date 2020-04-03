const menus = {
	main: `
  
    unitcss [command] <options>
    folder .............. to change unit of files in a folder
    file .............. to change unit of a file
    version .............. check version of css unit
    perview .............. preview file to make changes to
    
    =========================================================

    FOLDER :

    unitcss folder <folder>
    --folder, -r ..... to change unit of files in a folder

    =========================================================

    FILE: 

    unitcss file <file>
    --file, -f ..... to change unit of a file

    `,

	folder: `
  
    unitcss folder <folder>
    --folder, -r ..... to change unit of files in a folder
    
    `,

	file: `
  
    unitcss file <file>
    --file, -f ..... to change unit of a file
    
    `,
	preview: `
  
    unitcss preview <file>
    --preview, -p ..... to preview content of a file
    
    `,
};

/**
 * @default
 * @function
 * @param {*} args
 */
module.exports = (args) => {
	const [args1, args2] = args._;
	const subCmd = args1 === 'help' ? args2 : args1;

	console.log(menus[subCmd] || menus.main);
};
