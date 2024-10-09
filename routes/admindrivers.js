const express = require('express');
const router = express.Router();

router.get('/admindrivers', (req, res) => {
    res.render('admindrivers');
});

module.exports = router;
