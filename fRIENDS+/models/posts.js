const mongoose = require("mongoose");
const {Schema} = mongoose;

const postSchema = new Schema({

    image:[{
        url:String,
        filename:String
    }],
    title: {
         type :String},
    description: {
            type :String},
    likes:{
        type:Number,
        default:0
    },
    reviews:[{
        type: Schema.Types.ObjectId,
        ref : 'Review'
    }]
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;