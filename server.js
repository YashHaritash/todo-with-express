const express = require('express');
const app = express();

let tasks = [
    "sample task"
]
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    let taskList = tasks.map(t=>`<li>${t}</li>`).join('\n');
    res.send(`
        <html>
        <body>
            <form action="/" method="POST">
                <input name="newTask">
                <button type="submit">ADD</button>
            </form>
            <ul>
                ${taskList}
            </ul>
        </body>
        </html>    
    `)
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newTask);
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log("Server hosted on http://localhost:3000");
})