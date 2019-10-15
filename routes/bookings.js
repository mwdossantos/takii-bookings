const express = require('express');
const router = express.Router(); 
const Booking = require('../models/Booking');

router.get('/', (req, res) => {
    res.send("I am inevitable...")
});

router.post('/', (req, res) => {

    console.log(req.body);
    
    const booking = new Booking({
        company: req.body.company,
        name: req.body.name,
        receipient: req.body.receipient,
        location: req.body.location
    });

    booking.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })
});

module.exports = router;