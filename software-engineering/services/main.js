const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;
const { InternalServerError } = require('../errors/custom-error');
const errorHandler = require('../errors/error-handler');

app.use(express.json());

//api
app.post('/api/math', async (req, res, next) => {
	try {
		const { op, parameters } = req.body;
		if (op === 'sum') {
			const x = parameters[0];
			const y = parameters[1];			
			const response = await axios.post('http://localhost:3000/api/sum', {x, y});
			const result = response.data.result;
			res.json({ result });
		}
	} catch(err) {
		next(err);
	}
});

//error handler
app.use(errorHandler);


app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});