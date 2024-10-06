const express = require('express');
const router = express.Router();

// Define a route for the products page
router.get('/products', (req, res) => {
    res.render('products'); // This will render products.ejs
});

// You can also define other routes, e.g., for home or cart pages
router.get('/', (req, res) => {
    res.render('index'); // Ensure you have an index.ejs file for the home route
});

module.exports = router;
