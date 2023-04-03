const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

new itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        default: "Indonesia"
    },
    city: {
        type: String,
        required: true
    },
    IsPopular: {
        type: Boolean,
    },
    description: {
        type: String,
        required: true
    },
    imageId: {
        type: ObjectId,
        ref: "Image"
    },
    featureId: {
        type: ObjectId,
        ref: "Feature"
    },
    activityId: {
        type: ObjectId,
        ref: "Activity"
    },
    categoryId: {
        type: ObjectId,
        ref: "Category"
    }
})

module.exports = mongoose.model('Item', itemSchema);