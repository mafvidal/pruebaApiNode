const mongoose = require('mongoose');
const Constants = require('../constants');

const lineSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "sensorId": {
        type: String,
        required: true
    }
});

lineSchema.index({ name: 1, sensorId: 1 }, { unique: true });

module.exports = mongoose.model('Line', lineSchema);

module.exports.createLine = async function(data) {

    try {

        let line = new module.exports();

        line.name = data.name;
        line.sensorId = data.sensorId;

        await line.save();

        return line;

    } catch (e) {

        return Promise.reject(Constants.LINE_MESSAGE.ERROR_CREATE_LINE);

    }
};


