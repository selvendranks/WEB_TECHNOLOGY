const Profile = require('../models/rooms');
const Post = require('../models/posts');
const {cloudinary} = require('../cloudinary');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
//const {cordin} = require("../public/javascript/dragableMap");

const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken:mapBoxToken})

module.exports.index = async(req,res)=>{
    const profile = await Profile.findOne({username: req.user.username}).populate({
        path :'posts',
        populate:{
            path:'reviews',
            populate:{
                path: 'author'
            }
        }
    }).populate('author');
    res.render('profile/index.ejs',{profile});
 }

 module.exports.renderNewForm = (req,res)=>{
    res.render('profile/new.ejs');
    // res.redirect(`/friends/${profile._id}`);
}

module.exports.addNewRoom = async (req,res)=>{

    // res.send(req.body)
    const profile = new Profile(req.body.Profile);
    profile.username = req.user.username;
    profile.email = req.user.email;
    profile.image.url = req.file.path;
    profile.image.filename = req.file.filename;

    const saved = await profile.save();
    console.log(saved);
    req.flash('sucess','Sucessfully created your profile');
    res.redirect(`/friends/${profile._id}`);
}

module.exports.showRoom =async (req,res)=>{
    

    const {id} = req.params;
    const profile = await Profile.findById(id).populate({
        path :'posts',
        populate:{
            path:'author',
            populate:{
                path: 'reviews'
            }
        }
    }).populate('author');
    if(!profile){
        console.log('nulled');
        req.flash('error','Cannot find your profile register again');
        res.redirect('/register');
    }
    else{
        // res.send(req.user);
    res.render('profile/index.ejs',{profile});
    }
}

module.exports.updateRoom = async (req,res)=>{
    
    const {id} = req.params;
    // res.send(req.body.Profile);
    const profile_img = await Profile.findById(id);
    const profile = await Profile.findByIdAndUpdate(id,req.body.Profile,{runValidators:false,new:true});

    try{
    console.log(req.file.path);
    cloudinary.uploader.destroy(profile_img.image.filename);
    profile.image.url = req.file.path;
    profile.image.filename = req.file.filename;
    
    }
    catch(e){
        console.log("all set");
    }
    

    // if(req.body.deleteImages){

    //     for(let filename of req.body.deleteImages){
    //         await cloudinary.uploader.destroy(filename);
    //     }
    //     await room.updateOne({$pull:{image:{filename:{$in : req.body.deleteImages}}}})
        
    // }


    await profile.save();
    req.flash('sucess','Sucessfully updated the room')
    res.redirect(`/friends/${profile._id}`);
}

module.exports.renderEditForm  = async (req,res)=>{
 
    const x = await Profile.find({username:{$regex : 'a'}})
    console.log('******************************************************************');
    console.log(x)
    console.log('******************************************************************');

    const {id} = req.params;
    const profile = await Profile.findById(id).populate({
        path :'posts',
        populate:{
            path:'reviews',
            populate:{
                path: 'author'
            }
        }
    }).populate('author');
    if(!profile){
        console.log('nulled');
        req.flash('error','Cannot find room');
        res.redirect('/room');
    }
    else{
        // res.send(profile);
    res.render('profile/edit.ejs',{profile})
    }
}

module.exports.deleteRoom = async (req,res)=>{
    const {id} = req.params;
    await Room.findByIdAndDelete(id);
    req.flash('sucess','Sucessfully deleted the room')
    res.redirect(`/room`);
}