const path = require('path');
const router = require('express').Router();
// require store

// GET route to get all notes from DB

// server.js will add "/api" in front of filepath
router.get('/notes', (req,res) => {
    Store
        .getNotes()
        .then((notes) => res.json(notes));
});

// POST route to add the notes
router.post('/notes', (req, res) => {
    Store.
        addNote(req.body)
        .then((note) => res.json(note))
});



// DELETE route to delete my note

module.exports = router;
