var express = require('express');
var router = express.Router();
var authController = require('../controllers/AuthController.js');
//var ctrl = require('../controllers/index'); //getting index controller

/* GET home page. */
router.get('/',  function(req, res, next){
    req.flash("info", "Hello World!");
    res.render('index.ejs', { title: 'Express' }); 
});



module.exports = router;

