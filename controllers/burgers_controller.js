var path = require('path');

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ORM
var burgerORM = require('/../models/burger.js');



module.exports = function(app) {
    // Make files in public available as static files (HTML/CSS)
    app.use(express.static(__dirname + '/../public'));
    
    // GET to localhost root
    app.get('/', function(req, res) {
        
    });
}