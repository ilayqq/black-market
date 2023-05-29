const { Schema, model } = require('mongoose');

const Device = new Schema({
    name: { type: String, unique: true },
    price: { type: Number },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    img: { type: String },
    title: { type: String },
    description: { type: String },
})

module.exports = model('Device', Device);