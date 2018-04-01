var express = require('express');
var router = express.Router();
//var ctrl = require('../controllers/index'); //getting index controller

/* GET home page. */
router.get('/',  function(req, res, next){
    res.render('index.ejs', { title: 'Express' }); 
});


module.exports = router;

