const path = require('path')

module.exports = function (app) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + './../develop/public/notes.html'));
      }); 

      app.get('/index', function (req, res) {
        res.sendFile(path.join(__dirname + './../develop/public/index.html'));
      }); 

      app.get(function (req, res) {
        res.sendFile(path.join(__dirname + './../develop/public/index.html'));
      }); 

      
} 

