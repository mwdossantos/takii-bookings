const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
var db = firebase.firestore();

function getBookings() {
    let bookings = db.collection('bookings');
    let query = bookings.get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('no documents found');
                return;
            }

            snapshot.forEach(doc => {
                console.log(doc.data());
                return doc.data();
            });
        })
        .catch(err => {
            console.log('thanos didnt get the time stone,', err);
        });
}
router.get('/', (req, res) => {
    res.send('destiny arrives' + JSON.stringify(getBookings()));
});

module.exports = router;