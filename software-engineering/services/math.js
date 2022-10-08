const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/sum', (req, res) => {
	const {x, y} = req.body;
	res.json({
		result: x + y
	})
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});