const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Room = require('./models/rooms');

app.use(express.urlencoded({extended : true}));

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
app.get('/room',async(req,res)=>{
   const rooms = await Room.find({});
   console.log(rooms);
   res.render('rooms/index.ejs',{rooms});
})
app.post('/room',async (req,res)=>{
        res.send(req.body.Room);
})

app.get('/room/new',(req,res)=>{
    res.render('rooms/new.ejs');
})

app.get('/room/:id', async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findById(id);
    console.log(room);
    res.render('rooms/show.ejs',{room});
})

app.listen(5000,()=>{
    console.log('serving port 5000');
})