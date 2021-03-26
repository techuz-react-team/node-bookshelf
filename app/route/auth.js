const controller = require('app/controller/auth.controller');
const auth = require('app/utils/auth');

module.exports = (app, db) => {
    // Login user
    app.post('/login', controller.login);

    // Log out
    app.post('/logout', auth, controller.logout);
}