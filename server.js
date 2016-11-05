var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// make public files available
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// override POST having ?_method=PUT (for individual burger "Eat!" buttons)
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Grab routing
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Start App
app.listen(PORT, function() {
    console.log('Server now listening on port ' + PORT);
});

