const express = require("express");
const requestLogger = require("./shared/requestLogger");
const expressRequestId = require("express-request-id")();
const context = require('./utils/context');

const app = express();

// const database = require('./loaders/mongoose');
// database.connectMongoDatabase();

app.set("x-powered-by", false);

app.use(express.json());
app.use(context());
app.use(expressRequestId);
app.use(requestLogger);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/', require("./routes").router);

module.exports = app;
