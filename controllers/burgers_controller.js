var express = require('express');
var router = express.Router();
var burgerORM = require('../models/burger.js');


// GET to localhost root
router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burgerORM.select(function(result) {
        var burgerObj = {burgers: result};
        console.log(burgerObj);
        res.render('index', burgerObj);
    });
});

// PUT to update burger 
router.put('/burgers/update/:id', function(req, res) {
    burgerORM.update({devoured: req.body.devoured}, 'id', req.params.id, function() {
        res.redirect('/burgers');
    });
});

// CREATE to add new burger from input box
router.post('/burgers/create', function(req, res) {
    burgerORM.insert('burger_name', req.body.burger_name, function() {
        res.redirect('/burgers');
    });
});

// DELETE
router.delete('/burgers/delete/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    cat.delete(condition, function () {
        res.redirect('/burgers');
    });
});


module.exports = router;