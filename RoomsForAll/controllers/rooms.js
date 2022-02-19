const Room = require('../models/rooms');

module.exports.index = async(req,res)=>{
    const rooms = await Room.find({});
    res.render('rooms/index.ejs',{rooms});
 }

 module.exports.renderNewForm = (req,res)=>{
    res.render('rooms/new.ejs');
}

module.exports.addNewRoom = async (req,res)=>{
    const room = new Room(req.body.Room);
    room.author = req.user._id;
    await room.save()
    req.flash('sucess','Sucessfully added new room');
    res.redirect(`/room/${room._id}`);
}

module.exports.showRoom =async (req,res)=>{
    
    const {id} = req.params;
    const room = await Room.findById(id).populate({
        path :'reviews',
        populate:{
            path:'author'
        }
    }).populate('author');
    console.log(room);
    if(!room){
        console.log('nulled');
        req.flash('error','Cannot find room');
        res.redirect('/room');
    }
    else{
    res.render('rooms/show.ejs',{room});
    }
}

module.exports.updateRoom = async (req,res)=>{
    const {id} = req.params;
    const room = await Room.findByIdAndUpdate(id,req.body.Room,{runValidators:false,new:true});
    req.flash('sucess','Sucessfully updated the room')
    res.redirect(`/room/${room._id}`);
}

module.exports.renderEditForm  = async (req,res)=>{
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
}

module.exports.deleteRoom = async (req,res)=>{
    const {id} = req.params;
    await Room.findByIdAndDelete(id);
    req.flash('sucess','Sucessfully deleted the room')
    res.redirect(`/room`);
}