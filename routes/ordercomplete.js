const express = require('express');
const router = express.Router();

router.get('/ordercomplete', (req, res) => {
    res.render('ordercomplete');
});

module.exports = router;
