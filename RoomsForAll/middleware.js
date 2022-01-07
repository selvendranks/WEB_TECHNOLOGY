const isloggedin = (req,res,next)=>{
    console.log("req user",req.user);
    if(!req.isAuthenticated()){
        req.flash('error','you must be signed in');
        return res.redirect('/login');
    }
    next();
}

module.exports.isloggedin = isloggedin;
