module.exports = {
	/**
	 * @function
	 * @param {String} rem
	 * @param {String} global_size
	 */

	toPx: (rem, global_size) => {
		let remValue = parseFloat(rem) || 1,
			pxValue = remValue * parseFloat(global_size);

		return pxValue;
	},

	/**
	 * @function
	 * @param {String} px
	 * @param {String} global_size
	 */
	toRem: (px, global_size) => {
		let pxValue = parseFloat(px) || 1,
			remValue = (1 / parseFloat(global_size)) * pxValue;

		return remValue;
	},

	/**
	 * @param {String} px
	 * @param {String} global_size
	 * @function
	 */
	toEm: (px, global_size) => {
		let pxValue = parseFloat(px) || 1,
			emValue = Number((pxValue / parseFloat(global_size)).toFixed(3));

		return emValue;
	},

	/**
	 * @param {String} px
	 * @param {String} global_size
	 * @function
	 */
	vwTOpx: (vw, global_size) => {
		var result = (parseFloat(global_size) * vw) / 100;
		return result;
	},
};
