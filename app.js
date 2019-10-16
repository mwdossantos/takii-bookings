const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// middleware
app.use(bodyParser.json());

// import Routes
const hr = require('./routes/home');
const br = require('./routes/bookings');

// Routes
app.use('/', hr);
app.use('/bookings', br);

// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log('Thanos connected to the DB');
    } 
);

app.listen(5000);