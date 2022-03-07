const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const Review = require('./review');

const opts = {toJSON:{virtuals:true}};
const profileSchema = new Shema({ 
   
   username:{
       type:String
   },
   email:{
       type:String
   },
    description:{
      type:  String,
      require:true
    },
    email:{
       type: String,
       require:true
    },
    phone:{
        type:String,
        require:true
    },
    Gender:{
      type:String,
      require: true
    },
    image:{
        url:String,
        filename:String
    },
    postsNo:{ type:Number,
           default:0
    },
    followers:{
      type:Number,
      default:0
    },
    following:{
      type:Number,
      default:0
    },
    dateOfBirth:{
      type:String,
      default:0
    },
    friends:[{
        type:String,
    }],
    author:{
         type:mongoose.Schema.Types.ObjectId,
         ref: 'User'
    },
    posts:[{type:Shema.Types.ObjectId,ref : 'Post'}]
  

},opts);

// profileSchema.virtual('properties.popMarkup').get(function(){
//     return `<a style="text-decoration: none; "  href="/room/${this._id}">${this.title}</a>`
// })

// profileSchema.post('findOneAndDelete',async (room)=>{
//     if(room){
//         await Review.deleteMany({id:{$in:room.reviews}})
//     }
// })

const Profile= mongoose.model("Profile",profileSchema);
module.exports = Profile;