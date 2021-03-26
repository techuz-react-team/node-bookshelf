
const responseStructure = (success, payload, message) => {
    return {
        message: message,
        success: success,
        payload: payload ? payload : {}
    }
}

module.exports.success = (data = [], message = 'Ok') => {
    return responseStructure(true, data, message)
}

module.exports.error = (data = [], message = 'Error') => {
    return responseStructure(false, data, message)
}

module.exports.validationError = (error = {}, message = 'Validation error') => {
    var validationErr = [];
    if(error) {
        for(const {message, context: {key}} of error.details) {
            validationErr.push({field: key, message: message});
        }
    }

    return responseStructure(false, validationErr, message)
}