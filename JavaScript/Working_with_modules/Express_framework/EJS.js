const express = require('express');
app = express();

app.listen(3000,()=>{     //*starts up the server to use
    console.log("listeing");
})

app.get('/',(req,res)=>{
    res.send("meow meow");
})