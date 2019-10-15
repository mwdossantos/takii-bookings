// require Express
const express = require('express');

// home router
const hr = require('./routers/hr');

// create an instance of Express
const app = express();

// point to the static folder
app.use(express.static('public'));

// define that the app uses hr as the root URL
app.use('/', hr);

// listen to the port
app.listen(3000, () => {
    console.log('server has started');
})