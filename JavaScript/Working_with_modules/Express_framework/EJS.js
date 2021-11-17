const express = require('express');
app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views')); //*to excute from any folder

app.listen(3000,()=>{     //*starts up the server to use
    console.log("listeing");
})

app.get('/cat',(req,res)=>{
    res.render("home.ejs");
})