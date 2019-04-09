const express = require('express');
var artistController = require('./controllers/artistController.js');

const app = express();

artistController(app);


app.listen(3000, function(){
  console.log('listening on localhost:3000')
});
