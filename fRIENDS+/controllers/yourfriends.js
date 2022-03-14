const User = require('../models/user');
const Room = require('../models/profile');
const Profile = require('../models/profile');

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

module.exports.addPeople = async(req,res)=>{
   
    const {id} = req.params;
    const profile = await Profile.findById(id);
    if(profile.friendRequest.indexOf(req.user.username)<0){
    profile.friendRequest.push(req.user.username);
    profile.save();
    }
    req.flash('sucess','friend request sent');
    res.redirect(`/friends/${req.user._id}/yourfriends/new`);

}

module.exports.friendRequest = async(req,res)=>{
  
    const profile = await Profile.findOne({username: req.user.username})

    const friendRequests = [];
   if(profile.friendRequest.length>0){
    for(prof of profile.friendRequest){
        
        var requests = await Profile.findOne({username : prof})
        friendRequests.push(requests);

    }
  }
    
    res.render('friends/friendreq.ejs',{friendRequests})
    // res.render(friendRequests);

}

module.exports.decision = async(req,res)=>{
 
    const {id} = req.params;

    const decision = req.query.decision;
    // console.log(decision);
    const profile = await Profile.findOne({username: req.user.username})
    const friend = await Profile.findOne({username: id});

    if(decision=='accept' && profile.friends.indexOf(id)<0 && friend.friends.indexOf(req.user.username)<0){
        
        profile.friends.push(id);
        friend.friends.push(req.user.username);

        var index = profile.friendRequest.indexOf(id);
        if (index > -1) {
            profile.friendRequest.splice(index, 1); 
        }

        var index = friend.friendRequest.indexOf(req.user.username);
        if (index > -1) {
            friend.friendRequest.splice(index, 1); 
        }
        
        friend.save();
        profile.save();
        console.log("************************");
        console.log(profile);
        req.flash('sucess','Accepted friend request');
        res.redirect(`/friends/${req.user._id}/yourfriends/friendRequest`)

    }

    else{
        var index = profile.friendRequest.indexOf(id);
        if (index > -1) {
            profile.friendRequest.splice(index, 1); 
            profile.save();
            req.flash('error','rejected friend request');
            res.redirect(`/friends/${req.user._id}/yourfriends/friendRequest`)
        }

    }
   
}

module.exports.showFriends = async(req,res)=>{
   
    const profile = await Profile.findOne({username: req.user.username});

    const friends = [];
    if(profile.friends.length>0){
     for(prof of profile.friends){
         
         var buddies = await Profile.findOne({username : prof})
         friends.push(buddies);
 
     }
   }

   res.render('friends/friends.ejs',{friends})
  
}

module.exports.removeFriends = async(req,res)=>{
    
    const {id} = req.params;
    const profile = await Profile.findOne({username: req.user.username})
    const friend = await Profile.findById(id);
    
    

    var index = profile.friends.indexOf(friend.username);
    if (index > -1) {
        profile.friends.splice(index, 1); 
    }

    var index = friend.friends.indexOf(req.user.username);
    if (index > -1) {
        friend.friends.splice(index, 1); 
    }

    friend.save();
    profile.save();
    res.redirect(`/friends/${req.user._id}/yourfriends`)

}
