const mongoose = require("mongoose");
const {Schema} = mongoose;

const reviewSchema = new Schema({
    body: {
         type :String},

    rating:{
           type: Number
    },
    post:{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    author:{
        type: Schema.Types.ObjectId,
        ref : 'User'
    }
});

const Review = mongoose.model('Review',reviewSchema);
module.exports = Review;