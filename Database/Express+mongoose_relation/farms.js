const mongoose = require('mongoose');
const Product = require('./product')
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

farmSchema.post('findOneAndDelete',async function(farm){
    if(farm.products.length){
      const deleted = await  Product.deleteMany({id:{$in: farm.products}})
      console.log(deleted);
    }
})
const Farm = mongoose.model('Farm',farmSchema);
module.exports = Farm;