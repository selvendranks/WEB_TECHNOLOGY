const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies')
.then(()=>{
    console.log("connected_007#ooy?47_&drag")
})
.catch((err)=>{
    console.log(err);
})


app.set('views',path.join(__dirname,'views'));
app.set('view enginee','ejs');

app.get('/dogs',(req,res)=>{
    res.send("woof");
})











app.listen(1000,()=>{
    console.log('app is listening');
})