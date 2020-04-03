const menus = {
	main: `
  
    cssunit [command] <options>
    folder .............. to change unit of files in a folder
    file .............. to change unit of a file
    version .............. check version of css unit
    perview .............. preview file to make changes to
    
    =========================================================

    FOLDER :

    cssunit folder <folder>
    --folder, -r ..... to change unit of files in a folder

    =========================================================

    FILE: 

    cssunit folder <folder>
    --file, -f ..... to change unit of a file

    `,

	folder: `
  
    cssunit folder <folder>
    --folder, -r ..... to change unit of files in a folder
    
    `,

	file: `
  
    cssunit folder <folder>
    --file, -f ..... to change unit of a file
    
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
