const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const Review = require('./review');

const roomsSchema = new Shema({
    title:{
        type:String,
        require:true
    },
    price:{
      type:  String,
      require:true
    },
    description:{
       type: String,
       require:true
    },
    location:{
        type:String,
        require:true
    },
    image:[{
        url:String,
        filename:String
    }],
    author :{
         type:mongoose.Schema.Types.ObjectId,
         ref: 'User'
    },
    reviews:[{type:Shema.Types.ObjectId,ref : 'Review'}]
  

});

roomsSchema.post('findOneAndDelete',async (room)=>{
    if(room){
        await Review.deleteMany({id:{$in:room.reviews}})
    }
})

const room= mongoose.model("Rooms",roomsSchema);
module.exports = room;