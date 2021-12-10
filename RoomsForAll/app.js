const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const methodOverride = require('method-override');
const rooms = require('./routes/rooms');
const reviews = require('./routes/reviews')
const flash = require('connect-flash');
const app = express();
app.use(express.static('public'));
app.use('/room',rooms);
app.use('/room/:id/review',reviews);
app.engine('ejs',ejsMate);

app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.use(falsh());
const sessionConfig = { 
    secret :'goodsecret',
    resave:false,
    saveUninitialized:true ,
    cookie:{
        httpOnly : true,
        expires: Date.now() + 1000*60*60*24, //expires in a day
        maxAge: 1000*60*60*24
    }
}
app.use(session(sessionConfig));


mongoose.connect('mongodb://localhost:27017/Rooms')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine','ejs');


app.all('*',(req,res,next)=>{
    res.render('errors.ejs',{error:'Error 404'});
})
app.listen(5000,()=>{
    console.log('serving port 5000');
})
