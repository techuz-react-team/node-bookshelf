const jwt = require('jsonwebtoken');
const {ErrorHandler} = require('app/helpers/error');
const response = require('app/response/apiResponse');
const User = require('app/model/user');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) next(new ErrorHandler(401, 'Unauthorized request'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) next(new ErrorHandler(403, 'Access denied'));

        User.forge({id: user.id, token: token}).fetch()
        .then(res => {
            req.user = user;

            next();
        }).catch(err => {
            next(new ErrorHandler(403, 'Access denied'));
        });
    })
}