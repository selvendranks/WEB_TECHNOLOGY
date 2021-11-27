const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Room = require('./models/rooms');

mongoose.connect('mongodb://localhost:27017/Rooms')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/makeroom',async(req,res)=>{
   const room = new Room({title:'My Room ',description:'clean rooms'})
   await room.save();
   res.send(room);
})

app.listen(5000,()=>{
    console.log('serving port 5000');
})