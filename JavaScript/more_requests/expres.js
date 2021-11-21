const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override'); 
const {v4:uuid} = require('uuid'); 

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('Views',path.join(__dirname,'Views'));
app.set('view engine','ejs');


    let Comments = [
        {   
            id:uuid(),
            username : 'donkey',
            comment : 'i am the ulti'
        },
        {   
            id:uuid(),
            username : 'dragon',
            comment : 'plz visit my channel'

        },
        {   
            id:uuid(),
            username : 'master',
            comment : 'i am the megamind'
        }
    ]

app.get('/comment',(req,res)=>{

    res.render('comment1.ejs',{Comments});
})

app.get('/comment/new',(req,res)=>{
    res.render('comment_new');
})

app.get('/comment/:id',(req,res)=>{
        const {id} = req.params;
        console.log(id);
        const comment = Comments.find(c=> c.id === id);
        console.log(comment);
        res.render('comment_show',{comment});
})

app.get('/comment/:id/edit',(req,res)=>{
          const {id} = req.params;
          const comment = Comments.find(c=> c.id === id);
          res.render('comment_edit',{comment});
})

app.patch('/comment/:id',(req,res)=>{
    const {id} = req.params;
    const newcomment = req.body.comment;
    const foundcomment = Comments.find(c=> c.id === id);
    foundcomment.comment = newcomment;
    res.redirect('/comment');
})
app.delete('/comment/:id',(req,res)=>{
    const {id} = req.params;
    Comments = Comments.filter(c=> c.id !== id);
    res.redirect('/comment');
})
app.post('/comment',(req,res)=>{
    console.log(req.body);
    const {username,comment} = req.body;
    Comments.push({id :uuid(),username,comment});
   res.redirect('/comment')
})
app.get('/drag',(req,res)=>{
    res.send("get request");
})

app.post('/drag',(req,res)=>{
    const {gamer,stars} = (req.body);
    res.send(`${gamer},${stars}`);
})






app.listen(4000,()=>{
    console.log("requesting");
})
