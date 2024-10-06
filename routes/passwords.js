const express = require('express');
const router = express.Router();

router.get('/passwords', (req, res) => {
    res.render('passwords');
});

module.exports = router;
