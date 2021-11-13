const express = require('express');
app = express();

app.listen(300,()=>{     //*starts up the server to use
    console.log("listeing");
})

app.get('/cat',(req,res)=>{
    res.send("meow meow");
})

app.get('/info',(req,res)=>{ //* query request 
    const {q} = req.query;
    if(!q){
        res.send("Nothing found if nothing searched");
    }
    res.send(`your query : ${q} is being processed`);
})
app.get('/drag/:sub/:morgen',(req,res)=>{ //*  (:any) pattern sub and morgen can be any value
    console.log(req.params);
    const {sub,morgen} = req.params;
    res.send(`searching for ${sub} and ${morgen}`);
})
app.get('/',(req,res)=>{
    res.send("Home page welcomes you");  
})

app.post('/',(req,res)=>{
    res.send("Send request");
})

app.get('*',(req,res)=>{
    res.send("sorry,WE are constantly trying to improve");
})