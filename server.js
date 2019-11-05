const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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

app.post('/', (req, res) => {

    db.collection("users").add({
        first: "Matthew",
        last: "Wilson",
        born: 1997
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
})

// middleware
app.use(bodyParser.json());

// Client declaration
app.use(express.static('client'));

// Get html file
app.get("/", (req, res) => {
    const html = fs.readFileSync('./client/index.html').toString();
    res.send(html)
});

app.listen(5000, () => {
    console.log('Listening to port 5000: View your app here: http://localhost:5000/');
});