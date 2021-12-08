const express  = require('express');
const app = express();
const session = require('express-session');

const sessionOption = {secret: 'secreti',resave:false,}
app.use(session(sessionOption));


app.get('/viewcount',(req,res)=>{
    if(req.session.cont){
        req.session.cont+=1;
    }
    else{
        req.session.cont =1;
    }
    res.send(`${req.session.cont}`);
})

app.listen(3000,()=>{
    console.log("listening");
})

