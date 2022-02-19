const express = require('express');
const Room = require('../models/rooms');
const Review = require('../models/review');
const catchAsync = require('../utils/catchAsync');
const {validateReview,isloggedin,isReviewAuthor} = require('../middleware')
const router = express.Router({mergeParams:true});
const {RoomSchema,reviewSchema} = require('../shemes');
router.use(express.urlencoded({extended : true}));
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.post('/',validateReview,isloggedin,catchAsync(async(req,res)=>{
  
    const {id} = req.params;
    //console.log(id);
    const room = await Room.findById(id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    console.log(room);
    room.reviews.push(review);
    await review.save();
    await room.save();
    req.flash('sucess','Sucessfully added your review');
    res.redirect(`/room/${room.id}`);

}))

router.delete('/:reviewid',isloggedin,isReviewAuthor,catchAsync(async (req,res)=>{
    const {id,reviewid} = req.params;
   // await Room.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});  //deletes the object in array of reviews which has reviewid
    await Review.findByIdAndDelete(reviewid);
    req.flash('sucess','Sucessfully deleted the review')
    res.redirect(`/room/${id}`);
}))

module.exports = router;