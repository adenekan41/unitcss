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

module.exports = (args) => {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

	console.log(menus[subCmd] || menus.main);
};
