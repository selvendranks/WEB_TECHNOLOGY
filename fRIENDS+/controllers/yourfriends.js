const User = require('../models/user');
const Review = require('../models/review')
const Room = require('../models/rooms');
const Profile = require('../models/rooms');

module.exports.findPeople = async(req,res)=>{
    
    // res.send(req.params);
    const profile = await Profile.findOne({username: req.user.username}).populate({
        path :'posts',
        populate:{
            path:'reviews',
            populate:{
                path: 'author'
            }
        }
    }).populate('author');
    res.render('friends/new.ejs',{profile});
}

module.exports.showPeople = async(req,res)=>{
   
    const pattern = req.query.search
    const profiles = await Profile.find({username:{$regex : pattern}})
    console.log('******************************************************************');
    console.log(profiles)
    console.log('******************************************************************');

    const profile = await Profile.findOne({username: req.user.username}).populate({
        path :'posts',
        populate:{
            path:'reviews',
            populate:{
                path: 'author'
            }
        }
    }).populate('author');
    res.render('friends/find.ejs',{profile,profiles});
}

module.exports.viewPeople = async(req,res)=>{
   
    // res.send(req.params);
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
    res.render('profile/index.ejs',{profile});
    

}