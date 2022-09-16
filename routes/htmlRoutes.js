const path = require('path');
const router = require('express').Router();


// Create routes

// create route for notes.html
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Use * or / to send any other route hit back to homepage
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
