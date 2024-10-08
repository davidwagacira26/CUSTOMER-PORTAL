const express = require('express');
const router = express.Router();

router.get('/shippingaddress', (req, res) => {
    res.render('shippingaddress');
});

module.exports = router;
