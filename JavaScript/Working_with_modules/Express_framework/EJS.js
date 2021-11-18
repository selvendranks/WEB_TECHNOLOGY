const express = require('express');
app = express();
const redditdata = require('./views/data.json');
const path = require('path');

app.use(express.static("folder_express")) //*include all files in folder

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views')); //*to excute from any folder

app.listen(3000,()=>{     //*starts up the server to use
    console.log("listeing");
})

app.get('/test',(req,res)=>{
    const num = Math.floor(Math.random()*100)+1;
    res.render("home.ejs",{rand : num}); //*value is passed to template or just reffer same variable
})

app.get('/cats',(req,res)=>{
    const cats = ["monty","dgry","bakri","karuppan","vellayan"];
    res.render("loop.ejs",{cats});
})

app.get('/r/:subreddit',(req,res)=>{
    
    const {subreddit} = req.params;
    const data = redditdata[subreddit];
    if(data){
    res.render('reddit.ejs',{data});
    }
    else
       res.send("not found sorry");
})