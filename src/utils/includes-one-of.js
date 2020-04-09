/**
 * @function
 * @param {String} file
 * @param {Array} matchPattern
 * @default
 */

module.exports = (matchPattern, file) => {
	if (!Array.isArray(matchPattern)) {
		throw new Error('includesOneOf only accepts an array');
	}
	return matchPattern.some((str) => file.includes(str));
};
