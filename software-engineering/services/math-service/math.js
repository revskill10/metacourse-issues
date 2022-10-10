const express = require('express');
const app = express();
const PORT = 4000;
const library = require('./library')
app.use(express.json());
app.post('/api/sum', library.handleSum);
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});