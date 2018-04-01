var Quote = require('../models/index').Quote;
// Restful Style Controller + some views
module.exports.new = function(req, res){
    var q = Quote.build({author: '', quote: ''})
    res.render('quotes/new', {quote: q});
};

module.exports.create = function(req, res) {
    var q = Quote.create({author: req.body.author,
        quote: req.body.quote}).then(function(q) {
        if(q){
           console.log('Create Quote with id : ' + q.id);
           req.flash("success", "Succesfully create Quote");
           res.redirect('/');
        }
        
    });
};

module.exports.show = function(req, res) {
    var q = Quote.findById(req.params.quote_id).then(function(q) {
        if (q){
            res.render('quotes/show', {quote: q});
        }
        else{
            // Not found
            req.flash("error", "Given quote not found!");
            res.redirect('/');
        }

    })
};

module.exports.edit = function(req,res){
    var q = Quote.findById(req.params.quote_id).then(function(q) {
        if (q){
            res.render('quotes/edit', {quote: q});
        }
        else{
            // Not found
            req.flash("error", "Editing quote not found!");
            res.redirect('/');
        }

    })
};

module.exports.update = function(req,res){
    var q = Quote.findById(req.params.quote_id).then(function(q) {
        if (q){
            q.update({author: req.body.author,
                quote: req.body.quote}).then(() => {
                    req.flash('success', 'Successfully update the quote');
                    res.redirect('/');
                }).catch(error => {
                    req.flash("error", "Given Value not valid!");
                    res.redirect('/'); 
                });
            
        }
        else{
            // Not found
            req.flash("error", "Editing quote not found!");
            res.redirect('/');
        }

    })

};

module.exports.destroy = function(req,res){
    var q = Quote.findById(req.params.quote_id).then(function(q) {
        if (q){
            q.destroy().then(() => {
                req.flash('success', 'Successfully delete the quote');
                res.redirect('/');
            }).catch(error => {
                req.flash("error", "Cannot Destroy the quote");
                res.redirect('/'); 
            });
        }
        else{
            // Not found
            req.flash("error", "Editing quote not found!");
            res.redirect('/');
        }
    })
};

