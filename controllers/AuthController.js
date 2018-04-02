var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('auth/signup');
}

exports.signin = function(req, res) {
    res.render('auth/signin');
}

exports.dashboard = function(req,res){
	res.render('dashboard'); 
}

exports.logout = function(req,res){
    req.session.destroy(function(err) {
    req.flash('success', 'Logged out Successfully!');
    res.redirect('/');
    });
  
  }