function handleSum(req, res) {
	const { x, y } = req.body;
	res.json({
		result: x + y
	})
}

module.exports = {
    handleSum
}