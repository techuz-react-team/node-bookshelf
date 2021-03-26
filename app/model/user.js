const bookshelf = require('config/bookshelf');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

const User = bookshelf.model('User', {
    hasTimestamps: true,
    tableName: 'users',
    hidden: ['password'],
    initialize: function() {
        this.on('saving', this.hashPassword, this);
    },
    hashPassword: function(model, attrs, options) {
        return model.has('password') ? new Promise(function(resolve, reject) {
            bcrypt.hash(model.attributes.password, 10, function(err, hash) {
                if(err) reject(err);
                model.set('password', hash);
                resolve(hash); // data is created only after this occurs
            });
        }) : '';
    }
    //requireFetch: false, // returns null if there are no results. 
})

module.exports = User;