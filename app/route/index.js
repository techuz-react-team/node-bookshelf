const userRoute = require('app/route/users');
const authRoute = require('app/route/auth');

module.exports = (app, db) => {
    userRoute(app, db);
    authRoute(app, db);
}