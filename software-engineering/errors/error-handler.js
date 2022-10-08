const { HttpStatusCode } = require('./custom-error');

module.exports = (err, req, res, next) => {
	let customError = {
		//set default error
		statusCode: err.statusCode || HttpStatusCode.INTERNAL_SERVER,
		message: err.message || 'Internal Server Error!'
	}
	res.status(customError.statusCode).json({
		error: customError
	});
}