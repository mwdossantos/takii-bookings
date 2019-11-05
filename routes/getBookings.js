const express = require('express');
const router = express.Router(); 
const Booking = require('../models/Booking');

router.get('/', (req, res) => {
    
    res.send("DREAD IT. RUN FROM IT. DESTINY ARRIVES ALL THE SAME. AND NOW IT’S HERE. OR SHOULD I SAY, I AM." +"jew");
});

module.exports = router;