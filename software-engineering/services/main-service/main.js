const express = require('express');
const app = express();
const PORT = 3001;
const errorHandler = require('../../errors/error-handler');
const { BadRequestError } = require('../../errors/custom-error');
const { MathServiceClient } = require('./client');

app.use(express.json());

//api
app.post('/api/math', async (req, res, next) => {
	try {
		const { op, parameters } = req.body;
		if (op === 'sum') {
			const x = parameters[0];
			const y = parameters[1];
			if (isNaN(x) || isNaN(y)) {
				throw new BadRequestError('Invalid arguments');
			}
			let result = {};
			try {
				const mathServiceClient = new MathServiceClient();
				const response = await mathServiceClient.sum({ x, y });
				result = response.result;
			} catch (error) {
				console.log('MathService error');
				throw new BadRequestError('MathService error');
			}
			res.json({ result });
		}
	} catch (err) {
		next(err);
	}
});

//error handler
app.use(errorHandler);


app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});