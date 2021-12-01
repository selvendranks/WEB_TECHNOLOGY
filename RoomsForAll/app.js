const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Room = require('./models/rooms');
const {RoomSchema} = require('./shemes.js');
const methodOverride = require('method-override');

const app = express();
app.engine('ejs',ejsMate);

app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

const validateRoom = (req,res,next)=>{
    
    console.log(RoomSchema);
    const {error} = RoomSchema.validate(req.body);
    console.log(RoomSchema.validate(req.body));
    if(error){
        const msg = error.details.map(el=> el.message)
        res.render('errors.ejs',{error:msg});
    }
    else{
        next();
    }
}

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
app.post('/room',validateRoom,async (req,res)=>{
      const room = new Room(req.body.Room);
      await room.save();
      res.redirect(`/room/${room._id}`);
})

app.get('/room/new',(req,res)=>{
    res.render('rooms/new.ejs');
})

app.get('/room/:id', async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findById(id).then(console.log('found')).catch((err)=>{res.render('errors.ejs',{error:`${err}`})});
    
    res.render('rooms/show.ejs',{room});
})

app.put('/room/:id',async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findByIdAndUpdate(id,req.body.Room,{runValidators:true,new:true});
    console.log(req.body.Room);
    res.redirect(`/room/${room._id}`);
})
app.get('/room/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findById(id);
    res.render('rooms/edit.ejs',{room})
})

app.delete('/room/:id/delete',async (req,res)=>{
    const {id} = req.params;
    await Room.findOneAndDelete({_id:id});
    res.redirect(`/room`);
})

app.all('*',(req,res,next)=>{
    res.render('errors.ejs',{error:'Error 404'});
})
app.listen(5000,()=>{
    console.log('serving port 5000');
})
