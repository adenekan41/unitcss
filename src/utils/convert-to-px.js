module.exports = (px) => {
	let pxValue = parseFloat(px) || 1,
		remValue = (1 / parseFloat('16')) * pxValue;

	return remValue.toFixed(2);
};
