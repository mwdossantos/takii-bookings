const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
var db = firebase.firestore();

router.get('/', (req, res) => {
    res.send("I am inevitable...")
});

// post to the database
router.post('/', (req, res) => {

    // create a new booking using the Booking Model
    db.collection("bookings").add({
        company: req.body.company,
        name: req.body.name,
        receipient: req.body.receipient,
        location: req.body.location,
    }), err = () => {
        console.log(err);
    };

    // console.log(booking);

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
    // const formattedDate = booking.createdAtDate.toLocaleString('en-GB', optionsNL);

    // save the booking to the DB

});

module.exports = router;