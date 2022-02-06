const express = require('express');
const Room = require('../models/rooms');
const Review = require('../models/review');
const catchAsync = require('../utils/catchAsync');

const router = express.Router({mergeParams:true});
const {RoomSchema,reviewSchema} = require('../shemes');
router.use(express.urlencoded({extended : true}));
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

const validateReview = (req,res,next)=>{
    console.log(req.body);
    const  {error} = reviewSchema.validate(req.body);
    if(error){
        console.log(error);
        const msg = error.details.map(el=> el.message);
        res.render('errors.ejs',{error:msg});
    }
    else{
        next();
    }
}

router.post('/',validateReview,catchAsync(async(req,res)=>{
  
    const {id} = req.params;
    //console.log(id);
    const room = await Room.findById(id);
    const review = new Review(req.body.review);
    console.log(room);
    room.reviews.push(review);
    await review.save();
    await room.save();
    req.flash('sucess','Sucessfully added your review');
    res.redirect(`/room/${room.id}`);

}))

router.delete('/:reviewid',catchAsync(async (req,res)=>{
    const {id,reviewid} = req.params;
    await Room.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});  //deletes the object in array of reviews which has reviewid
    await Review.findByIdAndDelete(reviewid);
    req.flash('sucess','Sucessfully deleted the review')
    res.redirect(`/room/${id}`);
}))

module.exports = router;