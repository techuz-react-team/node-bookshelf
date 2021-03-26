const express = require('express');
const app = express();
const env = require('dotenv/config');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const { handleError, ErrorHandler} = require('app/helpers/error');
const auth = require('app/utils/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! Shutting down...');
    process.exit(1);
});

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    process.exit(1);
});

// app.use('/user', auth);

require('app/route')(app);

app.use((err, req, res, next) => {
    handleError(err, res);
});

app.listen(port, (err, res) => {
    if(err) {
        console.log('Server has error: '+ err.message);
    } else {
        console.log('Server started at port: '+ port);
    }
})