const mongoose = require('mongoose');

new categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Category', category);