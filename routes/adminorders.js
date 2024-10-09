const express = require('express');
const router = express.Router();

router.get('/adminorders', (req, res) => {
    res.render('adminorders');
});

module.exports = router;
