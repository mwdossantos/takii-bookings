const express = require('express');
const router = express.Router();
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
var db = firebase.firestore();

router.get('/', (req, res) => {
    res.send("I am inevitable...")
});

// post to the database
router.post('/', (req, res) => {
    console.log(req.body)
    // create a new booking using the Booking Model
    db.collection("bookings").add({
        company: req.body.company,
        date: req.body.date,
        receipient: req.body.recipient,
        location: req.body.location,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }), err = () => {
        console.log(err);
    };

    res.send(true);
});

module.exports = router;