const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//GET
app.get('/user',(req,res)=>{
    res.json({massge:"Hello",name:req.query.name});
    })
//POST
app.post('/user/you',(req,res)=>{
    res.json({massge:"Hello",name:req.body.name});
    })

app.listen(30002,()=>{
   console.log('server running on port 30002'); 
});

