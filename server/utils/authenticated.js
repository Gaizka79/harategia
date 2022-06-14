const isAuthenticated =  (req, res, next) => {
    console.log(req);
    if (req.isAuthenticated()) return next();
    res.redirect('/api');
};

module.exports = isAuthenticated;