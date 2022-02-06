const express = require('express');
const router = express.Router();
const {RoomSchema,reviewSchema} = require('../shemes');
const Room = require('../models/rooms');
const methodOverride = require('method-override');
const {isloggedin} = require('../middleware');

router.use(express.urlencoded({extended : true}));
router.use(methodOverride('_method'));

const validateRoom = (req,res,next)=>{
    
    console.log(req.body);
    const {error} = RoomSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el=> el.message);
        return res.render('errors.ejs',{error:msg});
    }
    else{
        next();
    }
}

router.get('/',async(req,res)=>{
   const rooms = await Room.find({});
   res.render('rooms/index.ejs',{rooms});
})
router.post('/',validateRoom,async (req,res)=>{
      const room = new Room(req.body.Room);
      await room.save()
      req.flash('sucess','Sucessfully added new room');
      res.redirect(`/room/${room._id}`);
})

router.get('/new',isloggedin,(req,res)=>{
    res.render('rooms/new.ejs');
})

router.get('/:id',isloggedin, async (req,res)=>{
    
    const {id} = req.params;
    const room = await Room.findById(id).populate('reviews');
    console.log(room);
    if(!room){
        console.log('nulled');
        req.flash('error','Cannot find room');
        res.redirect('/room');
    }
    else{
    res.render('rooms/show.ejs',{room});
    }
})

router.put('/:id',validateRoom,async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findByIdAndUpdate(id,req.body.Room,{runValidators:false,new:true});
    req.flash('sucess','Sucessfully updated the room')
    res.redirect(`/room/${room._id}`);
})
router.get('/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findById(id);
    if(!room){
        console.log('nulled');
        req.flash('error','Cannot find room');
        res.redirect('/room');
    }
    else{
    res.render('rooms/edit.ejs',{room})
    }
})


router.delete('/:id/delete',async (req,res)=>{
    const {id} = req.params;
    await Room.findByIdAndDelete(id);
    req.flash('sucess','Sucessfully deleted the room')
    res.redirect(`/room`);
})

module.exports = router;