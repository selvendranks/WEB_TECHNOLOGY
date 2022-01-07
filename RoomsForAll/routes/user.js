const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

router.get('/register',(req,res)=>{
    res.render('users/register');
})

router.post('/register',async (req,res)=>{
  try{
    const {username,email,password} = req.body;
    const user = new User({username , email});
    const registeredUser = await User.register(user,password);
    req.login(registeredUser,err=>{
        if(err) return next(err);
        // req.flash('sucess',"Welcome to yelpcamp");
        // res.redirect('/room');
    })
    req.flash('sucess',"Welcome to yelpcamp");
        res.redirect('/room');
  }
  catch(e){
      req.flash('error',e.message);
      res.redirect('/register');
  }
   
})

router.get('/login',async(req,res)=>{
    res.render('users/login');
})

router.post('/login',passport.authenticate('local',{failureFlash: true, failureRedirect: '/login'}),async(req,res)=>{
     res.redirect('/room');
})

router.get('/logout',(req,res)=>{
    req.logOut();
    req.flash('sucess','sucessfully logged out');
    res.redirect('/room');
})
module.exports = router;