const Post = require('../models/posts');
const { findById } = require('../models/review');
const Review = require('../models/review');
const Profile = require('../models/rooms');
const User = require('../models/user');
const { post } = require('../routes/rooms');
const {cloudinary} = require('../cloudinary');


module.exports.renderPost = async(req,res)=>{
    
    const {id} = req.params;
    const profile = await Profile.findById(id);
    res.render('post/new.ejs',{profile});
}

module.exports.addPost = async(req,res)=>{
  
    const {id} = req.params;
    //console.log(id);
    const profile = await Profile.findById(id);
    const post = new Post(req.body.Post);
    post.author = req.user._id;

    const imgs =   req.files.map(f=>({ url:f.path , filename:f.filename }));
    post.image.push(...imgs);
    profile.posts.push(post);
    profile.postsNo +=1;
    await post.save();
    await profile.save();

    req.flash('sucess','Sucessfully added your post');
    res.redirect(`/friends/${profile.id}`);

}

module.exports.deletePost = async (req,res)=>{

    //    console.log(req.params);
    const {id,postid} = req.params;

    const post = await Post.findById(postid);
 
     post.image.forEach((img,i) => { 
           cloudinary.uploader.destroy(img.filename);
        })

//    await Room.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});  //deletes the object in array of reviews which has reviewid
    await Post.findByIdAndDelete(postid);
    req.flash('sucess','Sucessfully deleted the review')
    res.redirect(`/friends/${id}`);
}
