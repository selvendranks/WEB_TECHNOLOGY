const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("connected_007#ooy?47_&drag")
})
.catch((err)=>{
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name: {
       type : String,
       required : true,   // name must be included mandatory for all product
       maxlength : 25  //lenght of the string not more than 25
    },
    price: {
        type :  Number, //default required is flase
        required :true,
        min : [0,'price should be positive']  //number not less than 0
    },
    onSale: {
        type : Boolean,
        default : false
    },
    categories : {
        type :[String],

    },
    qty:{
        online:{
            type :Number,
            default :0
        },
        offline:{
            type : Number,
            default :0
        }
    },
    size:{
            type : String,
            enum :['S','M','L','XL'] //size must be only in these values
    }
    
});

const Product = new mongoose.model('Product',productSchema);

// const bike = new Product({name :'Tire Pump',price : 20,categories : ['cycling','safety'],size:'L'});
// bike.save()
// .then(data=>{
//     console.log("saved");
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })



// Product.findOneAndUpdate({name:'Tire Pump'},{price : 10},{new:true,runValidators:true})
// .then(data=>{
//     console.log("saved");
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })
        
//////////////////////////////////////////creating instance methods

productSchema.methods.greet = function (){
    console.log(`awesome ${this.name}`)
}

const findProduct = async () =>{
    const foundProduct = await Product.findOne({name: 'Tire Pump'});
     foundProduct.greet();
   
}
findProduct();
/////////////////////////////////////creating static methods

productSchema.static.fireSale = function() {
    return this.updateMany({},{onSale : true })
}

Product.fireSale().then(res => console.log(res))

////////////////////////////////////middleware

productSchema.pre('save',async function(){
    console.log("about to save")                     //this function runs just before save
})

productSchema.post('save',async function(){
    console.log("just saved");
})