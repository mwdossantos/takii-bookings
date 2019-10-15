// require Express
const express = require('express');

// declare router and set it to the router function of Express
const router = express.Router();

// tell it to point to the root and render
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

//export it for use on the server
module.exports = router;