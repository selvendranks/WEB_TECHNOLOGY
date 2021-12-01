//////child has refference of parent


const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relation')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
});

const userSchema = new Schema({
    username : String,
    age : Number
});

const tweetSchema = new Schema({
    text: String,
    likes:Number,
    user: {type: Schema.Types.ObjectId,ref: 'User'}
})

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

const makeTweets = async ()=>{
    const user = new User({username : 'chickenfan99',age:30})
    const tweet = new Tweet({text:'i love to eat chickens',likes:34});
    tweet.user = user;
    await user.save();
    await tweet.save();
}

makeTweets();
const retrieve = ()=>{ //used set time out because saving requires sometime
    setTimeout(()=>{Tweet.findOne({text:'i love to eat chickens'}).then(tweet=> console.log(tweet));},2000); //return only product id
    setTimeout(()=>{Tweet.findOne({text:'i love to eat chickens'}).populate('products').then(tweet => console.log(tweet));},2000);//with populate it returns values
}

retrieve()
