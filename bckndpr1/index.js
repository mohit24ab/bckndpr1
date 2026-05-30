const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    exec('start http://localhost:3000');
});