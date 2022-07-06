const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    word: {
        required: true,
        type: String
    },
    mean: {
        required: true,
        type: String
    },
    imageExample: {
        required: true,
        type: String
    },
    example: {
        required: true,
        type: String
    },
    path: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('english_apps', dataSchema)