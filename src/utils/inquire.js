const inquirer = require('inquirer');

/**
 * @function
 * @default
 */

module.exports = () => {
	return inquirer.prompt([
		{
			name: 'css_unit',
			type: 'list',
			message: 'What do you want to convert ?',
			choices: [
				'Convert from px to rem',
				'Convert from rem to px',
				'Convert from px to em',
				'Convert from em to px',
			],
			default: 'Convert from px to rem',
		},
		{
			name: 'global_size',
			type: 'input',
			message: 'What is your root size ? (please this value must be in px)',
			default: '16px',
		},
	]);
};
