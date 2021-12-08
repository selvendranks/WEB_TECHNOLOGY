const express  = require('express');
const app = express();
const session = require('express-session');

const sessionOption = {secret: 'secreti',resave:false,saveUninitialized:false}
app.use(session(sessionOption));


app.get('/viewcount',(req,res)=>{
    if(req.session.cont){
        req.session.cont+=1;
    }
    else{
        req.session.cont =1;
    }
    res.send(`${req.session.cont}`);
})

app.get('/register/:username',(req,res)=>{
    const { username = 'None'} = req.params;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet',(req,res)=>{
    res.send(`Greetings ${req.session.username}`)
})
app.listen(3000,()=>{
    console.log("listening");
})

