const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const VegetableSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Vegetable = mongoose.model('Vegetable', VegetableSchema);