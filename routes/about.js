const express = require('express');
const router = express.Router();  // Create an Express router

// Route for the about page
router.get('/', (req, res) => {  // Change this line to match the base path
    res.render('about', {
        title: 'About Me'
    });
});

module.exports = router;  // Export this router so it can be used in app.js
