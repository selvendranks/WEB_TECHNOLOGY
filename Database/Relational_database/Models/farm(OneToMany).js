//parent has refference of child

const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/farm')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
});

const prodcutSchema = new Schema({
    name : String,
    price : Number,
    season:{
        type:String,
        enum: ['Spring','Summer','Fall','Winter']
    }
});

const Product = mongoose.model('Product',prodcutSchema);

Product.insertMany([
    {name: 'Goddes Melon',price:4.65,season:'Summer'},
    {name: 'Goddes Mango',price:1.65,season:'Summer'},
    {name: 'Goddes grape',price:0.95,season:'Winter'},

])

const farmSchema = new Schema({
    name :String,
    city : String,
    products :[{type: Schema.Types.ObjectId , ref: 'Product'}]

})

const Farm = mongoose.model('Farm',farmSchema);

const makeFarm = async()=>{
    const farm = new Farm({name : 'Drag farms',city :'dubai',});
    const melon = await Product.findOne({name:'Goddes Melon'});
    farm.products.push(melon);
    await farm.save();
    console.log(farm);

}

makeFarm();

const retrieve = ()=>{ //used set time out because saving requires sometime
    setTimeout(()=>{Farm.findOne({city:'dubai'}).then(farm => console.log(farm));},2000); //return only product id
    setTimeout(()=>{Farm.findOne({city:'dubai'}).populate('products').then(farm => console.log(farm));},2000);//with populate it returns values
}

retrieve();