const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));////middleware

const verifypassword = (req,res,next)=>{                      //fake aunthntication using middleware
    const {password} = req.query;
    if(password === '47'){
        next()   ///proceeds with other requests
    }
   else{
       res.send('not found');
   }
 }

 app.get('/secret',verifypassword,(req,res)=>{
     res.send("april fool");
 })

 app.use((err,req,res,next)=>{ //runs when ever error occurs
     console.log('error');
     console.log(err);
     next(err) //proceeds with default error handling
 })
 
app.get('/dog',(req,res)=>{
    res.send('frog');
    console.log('response');
})

app.use((req,res)=>{
    res.send('error 404');
})
app.listen(4000,()=>{
   console.log('listening');
})