const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const FruitSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    producer: {
        type: String,
        require: true
    }
});

module.exports = Fruit = mongoose.model('Fruit', FruitSchema);