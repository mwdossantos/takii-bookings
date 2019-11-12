const express = require('express');
const router = express.Router();
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
var db = firebase.firestore();

async function getBookings() {
    let snapshot = db.collection('bookings');

    try {
        const bookings = await snapshot.get();

        if (bookings.empty)
            return;

        const filtered = [];

        bookings.forEach(booking => {
            filtered.push(booking.data());
        });

        return filtered;
    } catch (error) {
        console.log(error);
    }
}

router.get('/', (req, res) => {
    getBookings().then((bookings) => {
        res.send(bookings);
    })
});
// jew
module.exports = router;