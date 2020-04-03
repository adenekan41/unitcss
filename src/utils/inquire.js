import inquirer from 'inquirer';

/**
 * @function
 * @default
 */

const askQuestion = () => {
	return inquirer.prompt([
		{
			name: 'css_unit',
			type: 'list',
			message: 'What do you want to convert ?',
			choices: ['Convert From px to Rem', 'Convert From Rem to Px'],
			default: 'Convert From px to Rem',
		},
		{
			name: 'global_size',
			type: 'input',
			message: 'What is your root size ? (please this value must be in px)',
			default: '16px',
		},
	]);
};

export default askQuestion;
