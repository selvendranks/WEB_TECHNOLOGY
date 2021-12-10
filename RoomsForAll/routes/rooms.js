const express = require('express');
const router = express.Router();
const {RoomSchema,reviewSchema} = require('../shemes');
const Room = require('../models/rooms');
const methodOverride = require('method-override');

router.use(express.urlencoded({extended : true}));
router.use(methodOverride('_method'));

const validateRoom = (req,res,next)=>{
    
    console.log(req.body);
    const {error} = RoomSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el=> el.message)
        res.render('errors.ejs',{error:msg});
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
      await room.save();
      res.redirect(`/room/${room._id}`);
})

router.get('/new',(req,res)=>{
    res.render('rooms/new.ejs');
})

router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findById(id).populate('reviews').then(console.log('found')).catch((err)=>{res.render('errors.ejs',{error:`${err}`})});
    console.log(room);
    res.render('rooms/show.ejs',{room});
})

router.put('/:id',async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findByIdAndUpdate(id,req.body.Room,{runValidators:true,new:true});
    res.redirect(`/room/${room._id}`);
})
router.get('/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findById(id);
    res.render('rooms/edit.ejs',{room})
})


router.delete('/:id/delete',async (req,res)=>{
    const {id} = req.params;
    await Room.findByIdAndDelete(id);
    res.redirect(`/room`);
})

module.exports = router;