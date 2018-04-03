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
        res.redirect('/');
    });
}

// ---------------- Authentication Related Utility Functions (authen session, roles, etc ...) ----------------------

exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    else{
        req.flash('error', 'Please Sign in first!');
        res.redirect('/signin');
    }    
}

// TODO -- roles
// https://stackoverflow.com/questions/26895219/verifying-roles-authentication-with-passport-js
// var role = req.user.role;


