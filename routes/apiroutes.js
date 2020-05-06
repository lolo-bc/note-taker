const noteData = require('../Develop/db/db.json');

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        res.json(noteData);
    });

    app.post('/api/notes', function (req, res) {
        const newNote = req.body;
        notes.push(newNote);
          res.json(true);
      });

      app.delete('/api/notes', function (req, res) {

      });
      
} 
