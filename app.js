const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

// Define a route for the homepage
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'My Blog'
    });
});

// Use the about route
app.use('/about', aboutRoute); 

app.use('/contact', contactRoute);

// Set the port and start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});
