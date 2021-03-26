const response = require('app/response/apiResponse');

class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();

      this.statusCode = statusCode;
      this.message = message;
    }
}

const handleError = (err, res) => {
  const {statusCode = 500, message} = err;
  res.status(statusCode).json(response.error(null, message));
}

module.exports = { ErrorHandler, handleError };