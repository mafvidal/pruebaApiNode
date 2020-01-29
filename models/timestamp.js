const mongoose = require('mongoose');
const Line = require('./line');
const Constants = require('../constants');

const timestampLineSchema = mongoose.Schema({
    "lineId": {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    "timestamp": {
        type: Number,
        required: true
    },
    "forwardCount": {
        type: Number,
        required: true
    },
    "backwardCount": {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('TimestampLine', timestampLineSchema);

module.exports.createTimestamp = async function(data) {

    try {

        let timestamp = new module.exports();
        const lineName = data.lineName;
        const sensorId = data.sensorId;

        const line = await Line.findOne({name: lineName, sensorId: sensorId});

        timestamp.lineId = line._id;
        timestamp.timestamp = data.timestamp;
        timestamp.forwardCount = data.forwardCount;
        timestamp.backwardCount = data.backwardCount;

        await timestamp.save();

        return timestamp;

    } catch (e) {

        return Promise.reject(Constants.TIMESTAMP_MESSAGE.ERROR_CREATE);

    }
};

module.exports.getTimestamps = async function(lineName, sensorId, fromDate, toDate) {

    try {

        const line = await Line.findOne({name: lineName, sensorId: sensorId});

        let timestamps = await this.find({
            lineId: line._id,
            timestamp: {$gte: fromDate, $lte: toDate}
        }).sort({timestamp: 1});

        return timestamps;

    } catch (e) {

        return Promise.reject(Constants.TIMESTAMP_MESSAGE.ERROR_SEARCH);

    }

};
