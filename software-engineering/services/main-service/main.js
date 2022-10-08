const express = require('express');
const app = express();
const PORT = 3001;
const errorHandler = require('../../errors/error-handler');
const { MathServiceClient } = require('./client');


app.use(express.json());


//api
app.post('/api/math', async (req, res, next) => {
	try {
		const { op, parameters } = req.body;
		if (op === 'sum') {
			const x = parameters[0];
			const y = parameters[1];
			const mathServiceClient = new MathServiceClient();
			const response = await mathServiceClient.sum({ x, y });
			const result = response.result;
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