const controller = require('app/controller/user.controller');

module.exports = (app, db) => {
    // Get all users list
    app.get('/user', controller.findAll);

    // Get user by id
    app.get('/user/:id', controller.findOne);

    // Create user
    app.post('/user', controller.create);

    // Update user
    app.put('/user/:id', controller.update);

    // Delete user
    app.delete('/user/:id', controller.delete);
}