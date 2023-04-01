const mongoose = require('mongoose');

new imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    }
})

module.exports = mongoose.model('Image', imageSchema);