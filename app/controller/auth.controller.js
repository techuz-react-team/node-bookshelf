const {ErrorHandler} = require('app/helpers/error');
const User = require('app/model/user');
const loginSchema = require('app/validation/login.schema');
const response = require('app/response/apiResponse');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res, next) => {
    const {error, value} = loginSchema.validate(req.body);
    if(error) {
        res.status(422).json(response.validationError(error));
    }

    User.where({email: req.body.email}).fetch()
    .then(user => {
        bcrypt.compare(req.body.password, user.get('password'), (err, resp) => {
            if(err) {
                next(new ErrorHandler(err.statusCode || 500, err.message));
            }

            if(resp) {
                let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 86400});

                User.forge({id: user.id}).save({token: token})
                .then((user) => {
                    res.status(200).json(response.success({user: user}, 'Logged in successfully'));
                }).catch(error => {
                    next(new ErrorHandler(error.statusCode || 500, error.message));
                });

            } else {
                res.status(401).json(response.error(null, 'Invalid password'));
            }
        })
    }).catch(User.NotFoundError, () => {
        res.status(404).json(response.error(null, 'User not found'));
    }).catch(error => {
        next(new ErrorHandler(error.statusCode || 500, error.message));
    });
}

module.exports.logout = (req, res, next) => {
    User.forge({id: req.user.id}).save({token: null})
    .then(user => {
        res.status(200).json(response.success(null, 'Logged out successfully'));
    }).catch(User.NotFoundError, () => {
        res.status(404).json(response.error(null, 'User not found'));
    }).catch(error => {
        next(new ErrorHandler(error.statusCode || 500, error.message));
    });
}