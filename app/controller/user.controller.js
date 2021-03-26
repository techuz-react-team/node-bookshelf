const response = require('app/response/apiResponse');
const {ErrorHandler} = require('app/helpers/error');
const User = require('app/model/user');
const userSchema = require('app/validation/user.schema');

/**
 * Get users list
 * 
 * @param {Object} req request parameter
 * @param {*} res response
 * @param {Function} next 
 * @return json
 */
module.exports.findAll = (req, res, next) => {
    // console.log(req.user);

    User.forge().fetchAll({columns: ['id','name','email']})
    .then((user) => {
        res.status(200).json(response.success(user));
    }).catch((error) => {
        next(new ErrorHandler(error.statusCode || 500, error.message));
    })
}

/**
 * Find the specific user details
 * 
 * @param {Object} req request parameter
 * @param {*} res response
 * @param {Function} next 
 * @return json
 */
module.exports.findOne = (req, res, next) => {
    new User({id: req.params.id}).fetch({columns: 'id,name,email'})
    .then(user => {
        res.status(200).json(response.success(user));
    }).catch(error => {
        next(new ErrorHandler(error.statusCode || 500, error.message));
    })
}

/**
 * Create new user
 * 
 * @param {Object} req request parameter
 * @param {*} res response
 * @param {Function} next 
 * @return json
 */
module.exports.create = (req, res, next) => {
    // Validate request
    const {error, value} = userSchema.validate(req.body);
    if(error) {
        res.status(422).json(response.validationError(error));
    }

    User.forge().save(req.body)
    .then(user => {
        res.status(200).json(response.success(user));
    }).catch(err => {
        next(new ErrorHandler(err.statusCode || 500, err.message));
    })
}

/**
 * Update the specific user details
 * 
 * @param {Object} req request parameter
 * @param {*} res response
 * @param {Function} next 
 * @return json
 */
module.exports.update = (req, res, next) => {
    // Validate request
    const {error, value} = userSchema.validate(req.body);
    if(error) {
        // res.send(error);
        res.status(422).json(response.validationError(error));
    }

    User.forge({id: req.params.id}).save(req.body)
    .then(user => {
        res.status(200).json(response.success(user));
    }).catch(err => {
        next(new ErrorHandler(err.statusCode || 500, err.message));
    })
}

module.exports.delete = (req, res, next) => {
    User.forge({id: req.params.id}).destroy()
    .then(user => {
        res.status(200).json(response.success(user, 'Record deleted successfully'));
    }).catch(err => {
        next(new ErrorHandler(err.statusCode || 500, err.message));
    })
}