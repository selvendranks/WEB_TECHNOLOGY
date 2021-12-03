const mongoose = require('mongoose');
const {Schema} = mongoose;

const farmSchema = new Schema({
    name:{type:String,
        required:[true,'Farm needs a name']

    },
    city:{
        type: String,
        
    },
    email:{
        type:String,
        required: [true,'email required']
    },
    products:[{ type: Schema.Types.ObjectId,ref:'Product'}]

});

const Farm = mongoose.model('Farm',farmSchema);
module.exports = Farm;