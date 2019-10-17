const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.get('/', (req, res) => {
    res.send("I am inevitable...")
});

// post to the database
router.post('/', (req, res) => {

    // create a new booking using the Booking Model
    const booking = new Booking({
        company: req.body.company,
        name: req.body.name,
        receipient: req.body.receipient,
        location: req.body.location,
        createdAtDate: req.body.createdAtDate,
    });

    console.log(booking);

    // define the options to format the time correctly
    let optionsNL = {
        hour12: false,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    // create a converted date based on the booking's created on date
    const formattedDate = booking.createdAtDate.toLocaleString('en-GB', optionsNL);

    // save the booking to the DB
    booking.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })
});

module.exports = router;