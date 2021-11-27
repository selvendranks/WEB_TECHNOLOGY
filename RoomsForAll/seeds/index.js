const mongoose = require('mongoose');
const room = require('../models/rooms');
const Room = require('../models/rooms');
const cities = require('./cities');
const {descriptors,places} = require('./seedHelepers');
mongoose.connect('mongodb://localhost:27017/Rooms')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async()=>{
    await Room.deleteMany({});
    for(let i=0;i<50;i++){
        const random = Math.floor(Math.random()*1000);
        const room =  new Room({
            title : `${sample(descriptors)} ${sample(places)}`,
            location : `${cities[random].city} , ${cities[random].state}`,
            
        });
        await room.save();
    }
    
}

seedDB().then(()=>{
    mongoose.connection.close();
});