const express = require('express');
const router = express.Router();

router.get('/revieworder', (req, res) => {
    res.render('revieworder');
});

module.exports = router;
