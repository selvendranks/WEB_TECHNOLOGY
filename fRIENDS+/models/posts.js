const mongoose = require("mongoose");
const {Schema} = mongoose;

const postSchema = new Schema({

    image:[{
        url:String,
        filename:String
    }],
    body: {
         type :String},
    author:{
        type: Schema.Types.ObjectId,
        ref : 'User'
    }
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;