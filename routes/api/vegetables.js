const express = require('express');
const router = express.Router();

// item Model
const Vegetable = require('../../models/Vegetable');

//@route GET api/Fruits
//@desc Get all Fruits
//@access Public
router.get('/', (req, res) => {
    Vegetable.find()
        .sort({ date: -1 })
        .then(Vegetables => res.json(Vegetables))
});

//@route POST api/Vegetables
//@desc Create a Post
//@access Public
router.post('/', (req, res) => {
    const newVegetable = new Vegetable({
        name: req.body.name,
        price: req.body.price,
        producer: req.body.producer
    });

    newVegetable.save().then(vegetable => res.json(vegetable));
});

//@route DELETE api/Vegetables
//@desc delete a vegetable
//@access Public
router.delete('/:id', (req, res) => {
    Vegetable.findById(req.params.id)
        .then(vegetable => vegetable.remove().then(() => res.json({success: true, vegetable: vegetable})))
        .catch(err => res.status(404).json({success: false}));
});

//@route PUT api/vegetables
//@desc put a vegetables
//@access Public
router.put('/:id', (req, res) => {
    Vegetable.findById(req.params.id, function (err, vegetable){
        vegetable.name = req.body.name;
        vegetable.price = req.body.price;
        vegetable.producer = req.body.producer;
        vegetable.save()
    });
    Vegetable.find()
    .sort({date: -1})
    .then(Vegetables => res.json(Vegetables))
    .catch(err => res.status(404).json({success: false}));
});
module.exports = router;