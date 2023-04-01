const mongoose = require('mongoose');

new imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Image', imageSchema);