const inquirer = require('inquirer');

module.exports = {
	askGithubCredentials: () => {
		const questions = [
			{
				name: 'px-rem',
				type: 'input',
				message: 'Convert From Px to Rem',
				validate: function(value) {
					if (value.length) {
						return true;
					} else {
						return 'Please ';
					}
				},
			},
			{
				name: 'rem-px',
				type: 'input',
				message: 'Convert From Rem to Px',
				validate: function(value) {
					if (value.length) {
						return true;
					} else {
						return 'Please enter your password.';
					}
				},
			},
		];
		return inquirer.prompt(questions);
	},
};
