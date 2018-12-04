const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const OrderSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    producer: {
        type: String,
    },
    text: {
        type: String
    }
});

module.exports = Order = mongoose.model('Order', OrderSchema);