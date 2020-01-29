const moment = require('moment');
const validator = require('validator');
const Constants = require('../constants');

let isInt = function (a) {
    return !isNaN(a) && parseInt(a) == parseFloat(a);
};

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let isBoolean = function (b) {
    return (b === 'true' || b === 'false' || typeof b === 'boolean');
};

let isDate = function (d, formats) {
    if (formats && formats.length) {
        let valid = false;
        for (let format of formats) {
            if (moment(d, format, true).isValid()) {
                valid = true;
            }
        }
        return valid;
    } else {
        return moment(d).isValid();
    }
};

let isString = function (param) {
    return (typeof param === 'string' || key instanceof String);
};

let isJson = function (obj) {
    return (obj && typeof obj == "object");
};

let isArray = function (obj) {
    try {
        return (obj instanceof Array);
    } catch (e) {
        return false;
    }
};

let isEmail = function (str) {
    return validator.isEmail(str);
};

let isTaggableInput = function (input, separator, type) {
    let split = input.split(separator);
    for (let item of split) {
        item = item.trim();
        if (!item) return false;
        else if (type == Constants.INPUT_VALIDATION.TYPES.Int && !isInt(item))
            return false;
        else if (type == Constants.INPUT_VALIDATION.TYPES.Number && !isNumber(item))
            return false;
    }
    return true;
};

let isNull = function (input) {
    return input == null;
};

let convertToString = function (param) {
    if (param != undefined || param) {
        if (param && typeof param == "object")
            return JSON.stringify(param);
        return param.toString();
    } else {
        return '';
    }
};

let replaceSpecialCharacters = function (str) {

    str = str.replace(/[&\/\\#,+()$~%'":*?<>{}!]/g, '_');

    str = str.replace(/[\u0020]/g, '-');

    str = str.replace(/ñ/g, 'n');
    str = str.replace(/Ñ/g, 'N');

    str = str.replace(/ñ/g, 'n');
    str = str.replace(/Ñ/g, 'N');

    str = str.replace(/ç/g, 'c');
    str = str.replace(/Ç/g, 'C');

    str = str.replace(/á/g, 'a');
    str = str.replace(/Á/g, 'A');
    str = str.replace(/ä/g, 'a');
    str = str.replace(/Ä/g, 'A');

    str = str.replace(/é/g, 'e');
    str = str.replace(/É/g, 'E');
    str = str.replace(/ë/g, 'e');
    str = str.replace(/Ë/g, 'E');

    str = str.replace(/í/g, 'i');
    str = str.replace(/Í/g, 'I');
    str = str.replace(/ï/g, 'i');
    str = str.replace(/Ï/g, 'I');

    str = str.replace(/ó/g, 'o');
    str = str.replace(/Ó/g, 'O');
    str = str.replace(/ö/g, 'o');
    str = str.replace(/Ö/g, 'O');

    str = str.replace(/ú/g, 'u');
    str = str.replace(/Ú/g, 'U');
    str = str.replace(/ü/g, 'u');
    str = str.replace(/Ü/g, 'U');

    return str;
};

let unique = function (array) {
    return [...new Set(array)];
};

let isNullOrUndefined = function (param) {
    return (param == null || param == undefined);
};

Date.prototype.addDays = function(days){
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

Date.prototype.addHours = function(hours){
    var dat = new Date(this.valueOf());
    dat.setTime(dat.getTime() + (hours*60*60*1000));
    return dat;
};

Date.prototype.addMinutes = function(minutes){
    var dat = new Date(this.valueOf());
    dat.setTime(dat.getTime() + (minutes*60*1000));
    return dat;
};



module.exports.isBoolean = isBoolean;
module.exports.isDate = isDate;
module.exports.isString = isString;
module.exports.isJson = isJson;
module.exports.isArray = isArray;
module.exports.isEmail = isEmail;
//module.exports.validateDate = validateDate;
module.exports.isInt = isInt;
module.exports.isNumber = isNumber;
module.exports.isTaggableInput = isTaggableInput;
module.exports.isNull = isNull;
module.exports.isNullOrUndefined = isNullOrUndefined;

module.exports.convertToString = convertToString;
module.exports.unique = unique;
