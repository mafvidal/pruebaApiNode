const mongoose = require('mongoose');
const Config = require('../config');

module.exports.connectMongoDatabase = function () {
    var options = {
        keepAlive: 3000,
        connectTimeoutMS: 300000
    };

    mongoose.Promise = global.Promise;
    mongoose.connect(Config.database.url, options);

    var mongoConnection = mongoose.connection;
    mongoConnection.on('error', function () {
        console.log(arguments);
        console.error('MongoDB connection error:')
    });
    mongoConnection.on('open', function(){
        console.log('MongoDB connection established.');
    });
};
