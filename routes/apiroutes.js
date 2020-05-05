const noteData = require('../db/db.json');

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        res.json(noteData);
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        notes.push(newNote);
          res.json(true);
      });
      
} 
