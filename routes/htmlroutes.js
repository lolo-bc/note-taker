const path = require('path')

module.exports = function (app) {
    app.use('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + './../develop/public/notes.html'));
      }); 

      app.use('/index', function (req, res) {
        res.sendFile(path.join(__dirname + './../develop/public/index.html'));
      }); 

      app.use(function (req, res) {
        res.sendFile(path.join(__dirname + './../develop/public/index.html'));
      }); 

      
} 

