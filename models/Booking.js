const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    company: String,
    name: String,
    receipient: String,
    date: {
        type: Date,
        default: Date.now
    },
    location: String,
});

module.exports = mongoose.model('Booking', BookingSchema);