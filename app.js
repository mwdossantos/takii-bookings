const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const conn = "mongodb+srv://matthew:thanos123@cluster0-aerzu.azure.mongodb.net/test?retryWrites=true&w=majority";
const conn = "mongodb://10.40.200.62:27017/takii";

// middleware
app.use(bodyParser.json());

// import Routes
const hr = require('./routes/home');
const br = require('./routes/bookings');

// Routes
app.use('/', hr);
app.use('/bookings', br);

// connect to DB by using promises
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Thanos connected to the DB');
}, err => {
    console.log('Thanos failed to snap his fingers - ' + err);
}
);

app.listen(5000, () => {
    console.log('Listening to port 5000: View your app here: http://localhost:5000/');
});