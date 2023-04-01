const mongoose = require('mongoose');

new categorySchema = new mongoose.Schema({
    name: {
        type: String
    }
})

module.exports = mongoose.model('Category', category);