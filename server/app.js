//  requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./modules/db');

//globals
const port = process.env.PORT || 8080;

//uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

//listening...
app.listen(port, function(){
  console.log('server up on:', port);
});
