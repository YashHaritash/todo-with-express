const express = require('express');
const { title } = require('process');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');

let tasks = [
    "sample task"
]

app.get('/',(req,res)=>{
    let taskList = tasks.map(t=>`<li>${t}</li>`).join('\n');
    res.render('home',{
        title : "Todo List",
        tasks
    });
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newTask);
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log("Server hosted on http://localhost:3000");
})