const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    res.send("I'm sorry little one... YEEEEEET")
});

module.exports = router;