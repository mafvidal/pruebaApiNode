const express = require('express');
const router = express.Router();
// const AuthService = require('../service/auth.service');
const logger = require('../shared/logger');
const Utils = require('../utils');
const Constants = require('../constants');
const HTTP = Constants.HTTP;
const VALIDATIONS = Constants.INPUT_VALIDATION;
const TAGGABLE_INPUT_SEPARATOR = Constants.TAGGABLE_INPUT_SEPARATOR;

const TAG = "[ROUTES - INPUT VALIDATION]";

const ERRORS = {
    UNEXPECTED: {
        code: "UNEXPECTED_ERROR",
        message: "Un error inesperado ocurrió al validar los datos de entrada."
    },
    INVALID_FIELD: (field, options) => {
        let ret = "El campo '"+field+"' tiene un valor inválido.";
        if (options && options.allowed_values && options.allowed_values.length)
            ret += " Valores permitidos: "+ options.allowed_values.join(', ') + ".";
        if (options && options.hasOwnProperty('min_value') && options.min_value != undefined)
            ret += " Valor mínimo permitido: "+ options.min_value + ".";
        if (options && options.hasOwnProperty('max_value') && options.max_value != undefined)
            ret += " Valor máximo permitido: "+ options.max_value + ".";
        if (options && options.hasOwnProperty('min_length') && options.min_length != undefined)
            ret += " Longitud mínima permitida: "+ options.min_length + ".";
        if (options && options.hasOwnProperty('max_length') && options.max_length != undefined)
            ret += " Longitud máxima permitida: "+ options.max_length + ".";
        return ret;
    },
    REQUIRED_FIELD: (field) => {
        return "El campo '"+field+"' es requerido.";
    }
};

class InputOptions {
    constructor(options) {
        options = (options && typeof options == 'object') ? options : {};
        this.min_length = Utils.isNumber(options.min_length) ? parseInt(options.min_length) : undefined;
        this.max_length = Utils.isNumber(options.max_length) ? parseInt(options.max_length) : undefined;
        this.min_value = Utils.isNumber(options.min_value) ? parseFloat(options.min_value) : undefined;
        this.max_value = Utils.isNumber(options.max_value) ? parseFloat(options.max_value) : undefined;
        this.allowed_values = (Utils.isArray(options.allowed_values) && options.allowed_values.length) ? options.allowed_values : [];
        this.formats = Utils.isArray(options.formats) ? options.formats : [];
    }
}

module.exports.validateInput = (_key, _type, _source, _isMandatory, _options) => {
    return (req, res, next) => {

        let key = _key;
        let type = _type;
        let source = _source;
        let isMandatory = _isMandatory == VALIDATIONS.MANDATORY;
        let options = new InputOptions(_options);

        // check key value
        if (!Utils.isString(key)) {
            logger.debug(TAG + " Error: 'key' should be of type string.");
            return module.exports.doResponse(res, HTTP.SERVER_INTERNAL_ERROR, ERRORS.UNEXPECTED);
        }

        // check validation type
        if (!VALIDATIONS.TYPES.hasOwnProperty(type)) {
            logger.debug(TAG + " Error: 'type' input should be contained in 'VALIDATIONS.TYPES'.");
            return module.exports.doResponse(res, HTTP.SERVER_INTERNAL_ERROR, ERRORS.UNEXPECTED);
        }

        // check source type
        if (!VALIDATIONS.SOURCES.hasOwnProperty(source)) {
            logger.debug(TAG + " Error: 'source' input should be contained in 'VALIDATIONS.SOURCES'.");
            return module.exports.doResponse(res, HTTP.SERVER_INTERNAL_ERROR, ERRORS.UNEXPECTED);
        }

        // check mandatory and set default value
        if (_isMandatory !== undefined && _isMandatory !== VALIDATIONS.MANDATORY && _isMandatory !== VALIDATIONS.OPTIONAL) {
            logger.debug(TAG + " Error: 'mandatory' input should be '"+VALIDATIONS.MANDATORY+"' or '"+VALIDATIONS.OPTIONAL+"'.");
            return module.exports.doResponse(res, HTTP.SERVER_INTERNAL_ERROR, ERRORS.UNEXPECTED);
        }

        source = source.toLowerCase();

        // check that the value has been given
        if (req[source].hasOwnProperty(key)) { //if given
            let value = req[source][key];
            // then validate value
            if (Utils.isNullOrUndefined(value)) {
                if (isMandatory) {
                    return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.REQUIRED_FIELD(key) });
                } else {
                    return next();
                }
            } else if (
                (type === VALIDATIONS.TYPES.TaggableInput_Int      && !Utils.isTaggableInput(value, TAGGABLE_INPUT_SEPARATOR, VALIDATIONS.TYPES.Int)) ||
                (type === VALIDATIONS.TYPES.TaggableInput_Number   && !Utils.isTaggableInput(value, TAGGABLE_INPUT_SEPARATOR, VALIDATIONS.TYPES.Number)) ||
                (type === VALIDATIONS.TYPES.TaggableInput_String   && !Utils.isTaggableInput(value, TAGGABLE_INPUT_SEPARATOR, VALIDATIONS.TYPES.String)) ||
                (type === VALIDATIONS.TYPES.Json                   && !Utils.isJson(value)) ||
                (type === VALIDATIONS.TYPES.Array                  && !Utils.isArray(value)) ||
                (type === VALIDATIONS.TYPES.String                 && (!Utils.isString(value) || (isMandatory && value.trim().length == 0))) ||
                (type === VALIDATIONS.TYPES.Boolean                && !Utils.isBoolean(value)) ||
                (type === VALIDATIONS.TYPES.Date                   && !Utils.isDate(value, options.formats)) ||
                (type === VALIDATIONS.TYPES.Int                    && !Utils.isInt(value)) ||
                (type === VALIDATIONS.TYPES.Number                 && !Utils.isNumber(value)) ||
                (type === VALIDATIONS.TYPES.Email                  && !Utils.isEmail(value))
            ) {
                //if not valid, return error
                return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.INVALID_FIELD(key) });
            } else {
                if (type == VALIDATIONS.TYPES.String) {
                    let tmp = value.trim();

                    if (options.min_length != undefined) {
                        if (tmp.length < options.min_length) {
                            return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.INVALID_FIELD(key, options) });
                        }
                    }

                    if (options.max_length != undefined) {
                        if (tmp.length > options.max_length) {
                            return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.INVALID_FIELD(key, options) });
                        }
                    }
                }

                if (type == VALIDATIONS.TYPES.Int || type == VALIDATIONS.Number) {
                    let tmp = parseFloat(value);

                    if (options.min_value != undefined) {
                        if (tmp < options.min_value) {
                            return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.INVALID_FIELD(key, options) });
                        }
                    }

                    if (options.max_value != undefined) {
                        if (tmp > options.max_value) {
                            return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.INVALID_FIELD(key, options) });
                        }
                    }
                }

                if (options.allowed_values.length) {
                    // for array
                    if (type == VALIDATIONS.TYPES.Array) {
                        for (let item of value) {
                            if (options.allowed_values.indexOf(item) == -1) {
                                return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.INVALID_FIELD(key, options) });
                            }
                        }
                    } else {
                        //let _value = (type == VALIDATIONS.TYPES.Int || type == VALIDATIONS.TYPES.Number) ? parseFloat(value) : value;
                        if (options.allowed_values.indexOf(value) == -1) {
                            return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.INVALID_FIELD(key, options) });
                        }
                    }
                }

                return next(); // if value is valid, next
            }
        } else if (isMandatory) { //if not given and it was mandatory, then return error
            return module.exports.doResponse(res, HTTP.UNPROCESSABLE_ENTITY, { message: ERRORS.REQUIRED_FIELD(key) });
        } else {
            return next();
        }
    };
};

module.exports.doResponse = (res, code, data) => {
    let body = {
        status: '',
        data: ''
    };

    if (code >= 200 && code < 400) {
        body.status = 'success',
            body.data = data
    } else {
        body.status = 'error',
            body.error = data
    }

    res.status(code).json(data);
};


module.exports.router = router;

// Add new routes below
router.use('/AutogestionPrestadores/api/Prestador/', require('./hello.route'));
router.use('/Protesis/api/', require('./protesis.route'));
