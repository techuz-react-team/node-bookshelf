require('dotenv').config()

module.exports = {

  development: {
    client: process.env.DB_CONNECTION,
    connection: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        charset  : process.env.DB_CHARSET
    },
    migrations: {
        directory: 'database/migrations',
    },
    seeds: {
      directory: 'database/seeds',
    },
  },

  staging: {
    client: process.env.DB_CONNECTION,
    connection: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        charset  : process.env.DB_CHARSET
    },
    migrations: {
        directory: 'database/migrations',
    },
    seeds: {
      directory: 'database/seeds',
    },
  },

  production: {
    client: process.env.DB_CONNECTION,
    connection: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        charset  : process.env.DB_CHARSET
    },
    migrations: {
        directory: 'database/migrations',
    },
    seeds: {
      directory: 'database/seeds',
    },
  }
};
