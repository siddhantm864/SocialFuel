const DataUriParser = require('datauri/parser.js')
const path = require('path')

const getUri = (file) => {
    const parser = new DataUriParser();
    const exactName = new DataUriParser(file.originalname).toString();
    return parser.format(exactName, file.buffer);
}

exports.module = getUri