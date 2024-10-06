const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const signupRoute = require('./routes/signup');
const passwordsRoute = require('./routes/passwords'); 
const dashboardRoute = require('./routes/dashboard');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const ordersRoute = require('./routes/orders');
const profileRoute = require('./routes/profile');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRoute);
app.use('/', signupRoute);
app.use('/', passwordsRoute);
app.use('/', dashboardRoute)
app.use('/', productRoute);
app.use('/', cartRoute);
app.use('/', ordersRoute);
app.use('/', profileRoute);

const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
