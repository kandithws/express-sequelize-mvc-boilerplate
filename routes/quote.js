var express = require('express');
var router = express.Router();
var Quote = require('../models/index').Quote;

// Note: Router, ideally acts similar to a controller
router.get('/new', function(req, res){
    var q = Quote.build({author: '', quote: ''})
    res.render('quotes/new', {quote: q});
});

router.post('/create', function(req, res) {
    var q = Quote.create({author: req.body.author,
        quote: req.body.quote}).then(function(q) {
        if(q){
           console.log('Create Quote with id : ' + q.id);
           req.flash("success", "Succesfully create Quote");
           res.redirect('/');
        }
        
    });
});

// show quote
router.get('/:id', function(req, res, quote_id) {
    var q = Quote.findById(quote_id).then(function(q) {
        if (q){
            res.render('quotes/show', {quote: q});
        }
        else{
            // Not found
            res.redirect('/');
        }

    })
});

module.exports = router;