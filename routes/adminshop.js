const express = require('express');
const router = express.Router();

router.get('/adminshop', (req, res) => {
    res.render('adminshop');
});

module.exports = router;
