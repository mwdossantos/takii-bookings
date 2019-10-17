const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const connectionString = "mongodb+srv://matthew:thanos123@cluster0-aerzu.azure.mongodb.net/test?retryWrites=true&w=majority";
// const dbName = "takii";

// middleware
app.use(bodyParser.json());

// import Routes
const hr = require('./routes/home');
const br = require('./routes/bookings');

// Routes
app.use('/', hr);
app.use('/bookings', br);

// connect to DB by using promises
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Thanos connected to the DB');
}, err => {
    console.log('Thanos failed to snap his fingers - ' + err);
}
);

app.listen(3000);