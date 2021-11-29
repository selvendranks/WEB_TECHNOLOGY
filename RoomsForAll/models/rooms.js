const mongoose = require('mongoose');
const Shema = mongoose.Schema;

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
    image:{
        type:String,
        require:true
    }


});

const room= mongoose.model("Rooms",roomsSchema);
module.exports = room;