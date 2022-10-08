const HttpStatusCode = {
	OK: 200,
	BAD_REQUEST: 400,
	NOT_FOUND: 404,
	INTERNAL_SERVER: 500,
};

class BaseError extends Error {
	constructor(message) {
		super(message);
	}
}

class InternalServerError extends BaseError {
	constructor(message) {
		super(message);
		this.statusCode = HttpStatusCode.INTERNAL_SERVER;
	}
}

class BadRequestError extends BaseError {
	constructor(message) {
		super(message);
		this.statusCode = HttpStatusCode.BAD_REQUEST;
	}
}

module.exports = {
	HttpStatusCode,
	BaseError,
	InternalServerError,
	BadRequestError
};