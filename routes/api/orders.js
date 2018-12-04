const express = require('express');
const router = express.Router();

// item Model
const Order = require('../../models/Order');

//@route GET api/order
//@desc Get all Orders
//@access Public
router.get('/', (req, res) => {
    Order.find()
        .sort({ date: -1 })
        .then(Orders => res.json(Orders))
});

//@route POST api/Order
//@desc Create a order
//@access Public
router.post('/', (req, res) => {
    const newOrder = new Order({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        producer: req.body.producer,
        text: req.body.text
    });

    newOrder.save().then(order => res.json(order));
});

//@route DELETE api/orders
//@desc delete a order
//@access Public
router.delete('/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => order.remove().then(() => res.json({success: true, order: order})))
        .catch(err => res.status(404).json({success: false}));
});

//@route PUT api/orders
//@desc put a order
//@access Public
router.put('/:id', (req, res) => {
    Order.findById(req.params.id, function (err, order){
        order.name = req.body.name;
        order.price = req.body.price;
        order.quantity = req.body.quantity;
        order.producer = req.body.producer;
        order.text = req.body.text;
        order.save()
    });
    Order.find()
    .sort({date: -1})
    .then(Orders => res.json(Orders))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;