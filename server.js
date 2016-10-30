// Express
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Other modules
var path = require('path'),
    methodOverride = ('method-override');

// Grab routing
require('./controllers/burgers_controller.js')(app);

// Start App
app.listen(PORT, function() {
    console.log('Server now listening on port ' + PORT);
});