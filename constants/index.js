module.exports = {
    HTTP: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        UNPROCESSABLE_ENTITY: 422,
        SERVER_INTERNAL_ERROR: 500
    },
    INPUT_VALIDATION: {
        TYPES: {
            TaggableInput_Int: 'TaggableInput_Int',
            TaggableInput_Number: 'TaggableInput_Number',
            TaggableInput_String: 'TaggableInput_String',
            Json: 'Json',
            String: 'String',
            Boolean: 'Boolean',
            Int: 'Int',
            Email: 'Email',
            Number: 'Number',
            Date: 'Date',
            Array: 'Array'
        },
        SOURCES: {
            Headers: 'Headers',
            Body: 'Body',
            Params: 'Params',
            Query: 'Query'
        },
        MANDATORY: 'MANDATORY',
        OPTIONAL: 'OPTIONAL'
    },
    INPUT_VALIDATION_OPTIONS: {
        PAGE: { min_value: 1 },
        LIMIT: { min_value: 1, max_value: 100 },
        DATE: { formats: [ 'YYYY-MM-DD' ] }
    },
    TAGGABLE_INPUT_SEPARATOR: ","

};
