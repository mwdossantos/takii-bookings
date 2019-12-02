const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCKn2v5fu91UUAbvDjb5SozEJp8ul3qT3M",
    authDomain: "takii-bookings.firebaseapp.com",
    databaseURL: "https://takii-bookings.firebaseio.com",
    projectId: "takii-bookings",
    storageBucket: "takii-bookings.appspot.com",
    messagingSenderId: "71332415783",
    appId: "1:71332415783:web:a40f8b15b5ce12aef18102"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// middleware   
app.use(bodyParser.json());
app.use(cors());

// import Routes
const hr = require('./routes/home');
const cbr = require('./routes/createBookings');
const gbr = require('./routes/getBookings');

// Routes
app.use('/', hr);
app.use('/createBookings', cbr);
app.use('/getBookings', gbr)

// Public declaration
app.use(express.static('public'));

const PORT = 69
// connect to DB by using promises
app.listen(PORT, () => {
    console.log('Listening to port ' + PORT + ': View your app here: http://localhost:5000/');
});