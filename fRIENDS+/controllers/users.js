const User = require('../models/user');
const Room = require('../models/rooms');
const Profile = require('../models/rooms');

module.exports.renderRegisterForm = (req,res)=>{
    res.render('users/register');
}

module.exports.registerUser = async (req,res)=>{
    try{
      const {username,email,password} = req.body;
      const user = new User({username , email});
      const registeredUser = await User.register(user,password);
      req.login(registeredUser,err=>{
          if(err) return next(err);
          // req.flash('sucess',"Welcome to yelpcamp");
          // res.redirect('/room');
      })
      req.flash('sucess',"Welcome to Friends+");
      res.redirect('/friends/new');
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
     
  }

  module.exports.renderLoginForm = async(req,res)=>{
    res.render('users/login');
}

module.exports.loginUser = async(req,res)=>{
    req.flash("sucess","Welcome back");
    const profile = await Profile.findOne({username : req.user.username});
    // res.render('profile/index.ejs',{profile});
    res.redirect(`/friends/${profile._id}`);
}

module.exports.logoutUser = (req,res)=>{
    req.logOut();
    req.flash('sucess','sucessfully logged out');
    res.redirect('/');
}