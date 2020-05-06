const express = require('express');
const app = express();
const path = require('path');
 
const PORT = process.env.PORT || 3000;


require('./routes/apiroutes.js')(app);
require('./routes/htmlroutes.js')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });