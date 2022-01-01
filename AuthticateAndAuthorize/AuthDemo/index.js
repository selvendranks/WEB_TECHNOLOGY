const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();
const User = require('./models/user');
app.set('view engine','ejs');


mongoose.connect('mongodb://localhost:27017/Auth')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
})

app.use(express.urlencoded({extended:true}));
app.use(session({secret:'secreti',resave:false,saveUninitialized:false}));

app.get('/register',(req,res)=>{
    res.render('register');
})

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}
app.post('/register',async(req,res)=>{
    const {username,password} = req.body;
    const user = new User({ userName:username , password });
    await user.save();
    res.send(user);
})
app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const foundUser = await User.findAndValidate(username,password);
    // const user = await User.findOne({userName:username});
    // const valid = await bcrypt.compare(password,user.password);
    //console.log(valid);
    if(foundUser){
        req.session.user_id = foundUser.id;
        res.redirect('/secret');
    }
    else{
        res.redirect('/secret');
    }
    
})

app.post('/logout',(req,res)=>{
    req.session.user_id = null;
    req.session.destroy() //destroys every session 
    res.redirect('/login');
})

app.get('/secret',requireLogin,(req,res)=>{
    res.render('secret',{secret : 'drag loves to play games'});
})

app.listen(3000,()=>{
    console.log('connected');
})