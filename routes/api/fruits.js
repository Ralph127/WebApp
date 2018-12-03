const express = require('express');
const router = express.Router();

// item Model
const Fruit = require('../../models/Fruit');

//@route GET api/Fruits
//@desc Get all Fruits
//@access Public
router.get('/', (req, res) => {
    Fruit.find()
        .sort({ date: -1 })
        .then(Fruits => res.json(Fruits))
});

//@route POST api/Fruits
//@desc Create a fruit
//@access Public
router.post('/', (req, res) => {
    const newFruit = new Fruit({
        name: req.body.name,
        price: req.body.price
    });

    newFruit.save().then(fruit => res.json(fruit));
});

//@route DELETE api/Fruits
//@desc delete a fruit
//@access Public
router.delete('/:id', (req, res) => {
    Fruit.findById(req.params.id)
        .then(fruit => fruit.remove().then(() => res.json({success: true, fruit: fruit})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;