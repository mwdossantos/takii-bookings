const express = require('express');
const router = express.Router(); 
const Booking = require('../models/booking');

router.get('/', (req, res) => {
    res.send("I am inevitable...")
});

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router;