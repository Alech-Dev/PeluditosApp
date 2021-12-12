const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'No está autorizado, registrese para acceder.');
    res.redirect('/users/signin');
};

module.exports = helpers;