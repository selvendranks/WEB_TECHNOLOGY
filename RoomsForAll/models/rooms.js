const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const roomsSchema = new Shema({
    title:{
        type:String
    },
    price:{
      type:  String
    },
    description:{
       type: String
    },
    location:{
        type:String
    },
    image:{
        type:String
    }


});

const room= mongoose.model("Rooms",roomsSchema);
module.exports = room;