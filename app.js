const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging middleware
app.use(morgan('dev'));

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

// Use the about and contact routes
app.use('/about', aboutRoute); 
app.use('/contact', contactRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});

