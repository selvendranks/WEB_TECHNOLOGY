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

const sample = array => array[Math.floor(Math.random() * array.length)]; //title

const intervalrand = function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min) //price
  }

const seedDB = async()=>{
    await Room.deleteMany({});
    for(let i=0;i<50;i++){
        const random = Math.floor(Math.random()*1000);
        const room =  new Room({
            author : "620f8e52196ce086648c7b06",
            title : `${sample(descriptors)} ${sample(places)}`,
            location : `${cities[random].city} , ${cities[random].state}`,
            image : 'https://source.unsplash.com/collection/1118894',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, neque tempora atque itaque illum doloremque nemo sunt consectetur alias exercitationem, iste, laboriosam ab facilis. Mollitia voluptatem optio corrupti eligendi odio.',
            price : `${intervalrand(200,1100)}`
        });
        await room.save();
    }
    
}

seedDB().then(()=>{
    mongoose.connection.close();
});