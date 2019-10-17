const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    company: String,
    name: String,
    receipient: String,
    createdAtDate: {
        type: Date,
        default: Date.now
    },
    location: String, 
});

module.exports = mongoose.model('Booking', BookingSchema);