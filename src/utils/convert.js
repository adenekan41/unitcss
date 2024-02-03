module.exports = {
	/**
	 * @function
	 * @param {String} rem
	 * @param {String} global_size
	 */

	toPx: (rem, global_size = 16) => {
		const remValue = parseFloat(rem) || 0,
			pxValue = remValue * parseFloat(global_size);

		return pxValue;
	},

	/**
	 * @function
	 * @param {String} px
	 * @param {String} global_size
	 */
	toRem: (px, global_size = 16) => {
		const pxValue = parseFloat(px) || 0,
			remValue = (1 / parseFloat(global_size)) * pxValue;

		return remValue;
	},

	/**
	 * @param {String} px
	 * @param {String} global_size
	 * @function
	 */
	toEm: (px, global_size = 16) => {
		const pxValue = parseFloat(px) || 0,
			emValue = Number((pxValue / parseFloat(global_size)).toFixed(3));

		return emValue;
	},

	/**
	 * @param {String} px
	 * @param {String} global_size
	 * @function
	 */
	vwTopx: (vw, global_size = 16) => {
		return (parseFloat(global_size) * vw) / 100;
	},

	/**
	 * @param {String} px
	 * @param {String} global_size
	 * @function
	 * @returns {String}
	 * @example
	 * pxToVh(16, 16) // 100
	 *
	 * 1vh = 16px
	 * 16px = 1vh
	 * 1px = 0.0625vh
	 */
	pxToVh: (px, global_size = 16) => {
		return px / parseFloat(global_size);
	},
};
