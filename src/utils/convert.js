module.exports = {
	toPx: (rem, global_size) => {
		console.log(global_size);
		let remValue = parseFloat(rem) || 1,
			pxValue = remValue * parseFloat(global_size);

		return pxValue;
	},
	toRem: (px, global_size) => {
		let pxValue = parseFloat(px) || 1,
			remValue = (1 / parseFloat(global_size)) * pxValue;

		return remValue;
	},
};
