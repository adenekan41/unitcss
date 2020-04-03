import chalk from 'chalk';
import { version } from '../../package.json';

/**
 * @function
 * @default
 */
const version = () => {
	console.log(chalk.green(`cssunit v${version}`));
};

export default version;
