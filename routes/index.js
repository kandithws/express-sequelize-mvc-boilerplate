var express = require('express');
var router = express.Router();
var authController = require('../controllers/AuthController.js');


/* GET home page. */
router.get('/',  function(req, res, next){
    req.flash("info", "Hello World!");
    res.render('index.ejs', { title: 'Express' }); 
});

router.get('/dashboardtest',  authController.isLoggedIn, function(req, res, next){
    req.flash("info", "Dashboard TEST Successssss!!");
    res.render('dashboard', { title: 'Express' }); 
});






module.exports = router;

