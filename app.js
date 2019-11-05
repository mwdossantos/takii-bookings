const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const conn = "mongodb://localhost:27017/takii";

// middleware
app.use(bodyParser.json());
app.use(cors());

// import Routes
const hr = require('./routes/home');
const br = require('./routes/bookings');
const gbr = require('./routes/getBookings');

// Routes
app.use('/', hr);
app.use('/bookings', br);
app.use('/get',gbr)

// Public declaration
app.use(express.static('public'));

// connect to DB by using promises
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Thanos connected to the DB and found peace');
}, err => {
    console.log('Thanos failed to snap his fingers - his head got chopped off by Thor - ' + err);
}
);

app.listen(5000, () => {
    console.log('Listening to port 5000: View your app here: http://localhost:5000/');
});