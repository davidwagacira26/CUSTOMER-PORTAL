const express = require('express');
const router = express.Router();

router.get('/admindashboard', (req, res) => {
    res.render('admindashboard');
});

module.exports = router;
