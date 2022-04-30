
const Room = require('./models/profile');


const isloggedin = (req,res,next)=>{
    console.log("req user",req.user);
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error','you must be signed in');
        return res.redirect('/login');
    }
    next();
}


module.exports.isloggedin = isloggedin;

